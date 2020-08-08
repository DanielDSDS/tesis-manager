const express = require('express');
const pool = require('../db');
const router = express.Router();

//Get todos los profesores
//works
router.get('/profesores', async (req, res) => {
    try {
        const profesores = await pool.query("SELECT * FROM Profesores;");
        res.json(profesores);
        res.body = profesores;
    } catch (err) {
        res.body = err.message
        res.json(err.message);
        console.log(res.body);
    }
});

router.get('/profesores/internos', async (req, res) => {
    try {
        const internos = await pool.query("SELECT * FROM internos;");
        res.json(internos);
        res.body = internos;
    } catch (err) {
        res.body = err.message
        console.log(res.body);
        res.json(err.message);
    }
});

//Registrar un profesor
//works
//el campo "tipo" con el que el profesor es recibido viene del front por un boton radio
router.post('/profesores', async (req, res) => {
    const { nombre_p } = req.body;
    try {
        const { cedula_p, direccion_p, correo_p, telefono_p, tipo } = req.body;
        const newProfesor = pool.query(
            "INSERT INTO profesores ( cedula_p, nombre_p, direccion_p, correo_p, telefono_p ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [cedula_p, nombre_p, direccion_p, correo_p, telefono_p]
        ).then(() => {
            if (tipo === "I") {
                const newInterno = pool.query(
                    "INSERT INTO internos ( cedula_p) VALUES( $1) RETURNING * ",
                    [cedula_p]
                );
            } else {
                const { cod_institucion } = req.body
                const newForaneo = pool.query(
                    "INSERT INTO internos ( cedula_p,cod_institucion) VALUES( $1,$2) RETURNING * ",
                    [cedula_p, cod_institucion]
                );
            }
        })

        res.json(`El profesor ${nombre_p} ha sido añadido exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un profesor
//works
router.get('/profesores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const profesores = await pool.query("SELECT * FROM profesores WHERE cedula_p = $1", [id]);

        if (profesores.rows[0]) {
            res.json(profesores.rows[0]);
        } else {
            res.json(`El profesor ${id} no esta registrado`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un profesor
//works
router.put('/profesores/:id', async (req, res) => {
    const { nombre_p } = req.body;
    try {
        const { id } = req.params;
        const { direccion_p, correo_p, telefono_p } = req.body;
        const updateProfesor = await pool.query("UPDATE profesores SET nombre_p=$1, direccion_p=$2, correo_p=$3, telefono_p=$4  WHERE cedula_p = $5;",
            [nombre_p, direccion_p, correo_p, telefono_p, id]);

        res.json(`El profesor ${nombre_p} ha sido actualizado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un Profesor
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula
//works
router.delete('/profesores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { id } = req.params;
        const deleteProfesor = await pool.query("DELETE FROM profesores WHERE cedula_p = $1", [id]);

        res.json(`El profesor ${id} ha sido eliminado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

module.exports = router;