const express = require('express');
const pool = require('../db');
const router = express.Router();

//Esto es el standby mas mierda de toda la vida ya que 3/4 de los datos son otros querys que no pueddo probar por que da 404 con todo 
//works
router.get('/propuestas', async (req, res) => {
    try {
        const propuestas = await pool.query("SELECT * FROM propuestas;")
        res.body = propuestas;
        res.json(propuestas.rows);
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
        res.json(err.message);
    }
})

router.get('/propuestasT', async (req, res) => {
    try {
        const propuestas = await pool
        .query("SELECT titulo_propuesta,fec_entrega,nombre_t FROM Propuestas p,Tesistas t,Aplicaciones_propuestas ap WHERE p.id_propuesta = ap.id_propuesta AND t.cedula_t = ap.cedula_t;")
        res.body = propuestas;
        res.json(propuestas.rows);
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
        res.json(err.message);
    }
})

function getLocalDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

//Registrar una propuesta
//works

//debe recibir desde front: cedula_t,titulo_propuesta,fecha_entrega

//valores inicializados por defecto: id_prop:serial,cedula_p:NULL,id_comite:NULL,id_tg:NULL,estatus_aprobacion:PA,veredicto_prof:PER
//valores inicializados por defecto 2: titulo:NULL,observaciones_comite:NULL,fec_comite:NULL,fec_veredicto:NULL,fec_aprobacion:NULL
router.post('/propuestas', async (req, res) => {
    const { cedula_t, titulo_propuesta, fec_entrega } = req.body;
    try {
        //const fec_entrega = getLocalDate();

        const newPropuesta = await pool.query(
            "INSERT INTO Propuestas (titulo_propuesta, fec_entrega ) VALUES( $1, $2 ) RETURNING *;",
            [titulo_propuesta, fec_entrega]
        )
            .then(() => {
                pool.query(
                    "INSERT INTO Aplicaciones_propuestas ( cedula_t ) VALUES( $1) RETURNING *;",
                    [cedula_t]
                )
                    .then(() => {
                        res.json(`La propuesta del tesista C.I V-${cedula_t} ha sido creada exitosamente`);
                    })
                    .catch(err => res.json(`La propuesta del tesista C.I V-${cedula_t} no ha podido ser creada`))
            })

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get una propuesta
//works
router.get('/propuestas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const propuestas = await pool.query(
            "SELECT * FROM Propuestas p WHERE p.id_propuesta IN (SELECT id_propuesta FROM Aplicaciones_propuestas a WHERE cedula_t = $1)", [id]);

        if (propuestas.rows[0]) {
            res.json(propuestas.rows[0]);
        } else {
            res.json(`La propuesta del tesista C.I V-${id} no existe`);
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

router.get('/propuestas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const propuestas = await pool.query(
            "SELECT * FROM Propuestas p WHERE p.id_propuesta IN (SELECT id_propuesta FROM Aplicaciones_propuestas a WHERE cedula_t = $1)", [id]);

        if (propuestas.rows[0]) {
            res.json(propuestas.rows[0]);
        } else {
            res.json(`La propuesta del tesista C.I V-${id} no existe`);
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Actualizar una propuesta
//works
router.put('/propuestas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { id_comite, id_tg, estatus_aprobacion, veredicto_profesor, titulo, titulo_propuesta, observaciones_comite, fec_comite, fec_veredicto,fec_aprovacion } = req.body;
        const updatePropuesta = await pool.query
            ("UPDATE Propuestas SET id_comite = $1, id_tg = $2, estatus_aprovacion = $3, veredicto_profesor = $4, titulo = $5, titulo_propuesta = $6, observaciones_comite = $7, fec_comite = $7, fec_veredicto = $8, fec_aprovacion = $9 WHERE id_propuesta = $10",
                [id_comite, id_tg, estatus_aprobacion, veredicto_profesor, titulo, titulo_propuesta, observaciones_comite, fec_comite, fec_veredicto,fec_aprovacion])
            .then(() => {
                res.json(`La propuesta ${id} ha sido actualizada exitosamente`);
            })
            .catch((err) => {
                res.json(err.message)
            })


    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar una propuesta
//works
//Estar pendiente de restricciones de borrado con respecto a otras tablas
router.delete('/propuestas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletePropuesta = await pool.query("DELETE FROM propuestas WHERE id_propuesta = $1", [id]);

        res.json(`La propuesta ${id} ha sido eliminada correctamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

module.exports = router;