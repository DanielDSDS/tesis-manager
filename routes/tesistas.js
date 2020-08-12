const express = require('express')
const router = express.Router()
const pool = require('../db');
const { red } = require('@material-ui/core/colors');

//works
router.get('/tesistas', async (req, res) => {
    try {
        const tesistas = await pool.query("SELECT * FROM Tesistas;");
        res.json(tesistas.rows)
        res.body = tesistas;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
        res.json(err.message);
    }
})

router.get('/tesistas-sintesis', async (req, res) => {
    try {
        const tesistas = await pool.query("SELECT * FROM Tesistas WHERE cedula_t NOT IN (SELECT cedula_t FROM Trabajos_grado);");
        res.json(tesistas.rows)
        res.body = tesistas;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
        res.json(err.message);
    }
})


//Registrar un tesista
//works
router.post('/tesistas', async (req, res) => {
    try {
        const { cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t } = req.body;
        const newTesista = await pool.query(
            "INSERT INTO tesistas ( cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t]
        )
            .then(() => {
                res.json(`El tesista C.I V-${cedula_t} fue creado exitosamente`);
            })
            .catch((err) => {
                res.json(`El tesista C.I V-${cedula_t} no pudo ser creado`);
            })

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un tesista
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula
//works
router.get('/tesistas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tesista = await pool.query("SELECT * FROM tesistas WHERE cedula_t = $1", [id])
        if (tesista.rows[0]) {
            res.json(tesista.rows[0]);
        } else {
            res.json(`El tesista ${id} no esta registrado`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un tesista (No creo que eso se use)
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula
//works
//Estar pendiente de problemas de restricciones de borrado o actualizacion con otras tablas
router.put('/tesistas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t } = req.body;
        const updateTesista = await pool.query(
            "UPDATE tesistas SET nombre_t = $1, correo_ucab_t = $2, correo_particular_t = $3, telefono_contacto_t = $4 WHERE cedula_t = $5;",
            [nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t, id])
            .then(() => {
                res.json(`El tesista C.I V-${id} ha sido actualizada exitosamente`);
            })
            .catch((err) => {
                res.json(`El tesista C.I V-${id} no ha podido ser actualizado`)
            })

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un Tesista
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.delete('/tesistas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTesista = await pool.query("DELETE FROM Tesistas WHERE cedula_t = $1", [id])
            .then(() => {
                res.json(`El tesista C.I V-${id} ha sido eliminado exitosamente`)
            })
            .catch((err) => {
                res.json(`El tesista C.I V-${id} no ha podido ser eliminado`)
            })

    } catch (err) {
        res.body = err.message;
        res.json(err.message)
        console.log(res.body);
    }
})

module.exports = router