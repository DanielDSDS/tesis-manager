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

router.get('/propuestasViables', async (req, res) => {
    try {
        const propuestas = await pool.query("SELECT * FROM propuestas WHERE estatus_aprobacion = 'PAR';")
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
            .query("SELECT p.id_propuesta,titulo_propuesta,to_char(p.fec_entrega,'DD-MM-YYYY') as fec_entrega,t.nombre_t FROM Propuestas p,Tesistas t,Aplicaciones_propuestas ap WHERE p.id_propuesta = ap.id_propuesta AND ap.cedula_t = t.cedula_t;")
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
    today = mm + '-' + dd + '-' + yyyy;
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
                pool.query("INSERT INTO Aplicaciones_propuestas ( id_propuesta,cedula_t ) VALUES( (SELECT MAX(id_propuesta) FROM propuestas),$1) RETURNING *;",
                    [cedula_t])

                res.json(`La propuesta del tesista C.I V-${cedula_t} fue creada exitosamente`)
            })
            .catch(err => res.json(newPropuesta.rows[0]))

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
            "SELECT * FROM Propuestas WHERE id_propuesta = $1", [id]);
        if (propuestas.rows[0]) {
            res.json(propuestas.rows[0]);
        } else {
            res.json(`400`);
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
        const { id_comite, estatus_aprobacion, veredicto_profesor, titulo_propuesta, observaciones_comite, fec_comite, fec_veredicto, fec_aprobacion } = req.body;
        const updatePropuesta = await pool.query
            ("UPDATE Propuestas SET id_comite = $1, estatus_aprobacion = $2, veredicto_profesor = $3, titulo_propuesta = $4, observaciones_comite = $5, fec_comite = $6, fec_veredicto = $7, fec_aprobacion = $8 WHERE id_propuesta = $9",
                [id_comite, estatus_aprobacion, veredicto_profesor, titulo_propuesta, observaciones_comite, fec_comite, fec_veredicto, fec_aprobacion, id])
        if (updatePropuesta.rows[0]) {
            res.json(`200`);
        } else {
            res.json(`400`);
        }
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

router.put('/propuesta/:id', async (req, res) => {
    const { id } = req.params
    try {
        const { cedula_p, veredicto_profesor, id_comite, observaciones_comite, estatus_aprobacion, fec_veredicto, fec_aprobacion } = req.body
        const updatePropuesta = await pool.query
            ("UPDATE Propuestas SET cedula_p=$1, veredicto_profesor=$2, id_comite=$3, observaciones_comite=$4, estatus_aprobacion=$5, fec_veredicto=$6, fec_aprobacion=$7 WHERE id_propuesta = $8",
                [cedula_p, veredicto_profesor, id_comite, observaciones_comite, estatus_aprobacion, fec_veredicto, fec_aprobacion, id])
        if (updatePropuesta.rows[0]) {
            res.json(`200`);
        } else {
            res.json(`400`);
        }


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