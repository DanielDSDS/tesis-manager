const express = require('express');
const pool = require('../db');
const router = express.Router();


//works
router.get('/trabajos_grado', async (req, res) => {
    try {
        const trabajos_grado = await pool.query("SELECT * FROM Trabajos_grado;");
        res.body = trabajos_grado;
        res.json(trabajos_grado.rows);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
})

//Registrar un TG
//por testear
router.post('/trabajos_grado', async (req, res) => {
    const { num_consejo, cedula_t, modalidad, fec_aprobacion, titulo } = req.body;
    try {
        const newTG = await pool.query(
            "INSERT INTO trabajos_grado ( num_consejo, cedula_t, modalidad, fec_aprobacion, titulo ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [num_consejo, cedula_t, modalidad, fec_aprobacion, titulo]
        ).then(() => {
            if (newTG.rows[0]) {
                if (modalidad = "Experimental") {
                    "INSERT INTO experimentales (  id_tg, cedula_t ) VALUES ( $1, $2) RETURNING * ",
                    [ "SELECT id_tg FROM trabajos_grado WHERE trabajos_grado.cedula_t = cedula_t", cedula_t]
                } else {
                    //"INSERT INTO instrumentales (  id_tg, cod_emp ) VALUES ( $1, $2) RETURNING * ", []
                }
            } else {
                res.json(`El Trabajo de Grado de C.I V-${cedula_t}no pudo ser creado`);
            }
        })
            .catch((err) => {
                res.json(`El Trabajo de Grado de C.I V-${cedula_t} no pudo ser creado`);
            })
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un TG
//testear
router.get('/trabajos_grado/:id', async (req, res) => {
    const { id } = req.params
    try {
        const TG = await pool.query("SELECT * FROM Trabajos_grado WHERE cedula_t = $1;", [id])
        if (TG.rows[0]) {
            res.json(TG.rows[0]);
        } else {
            res.json(`El trabajos_grado ${id} no esta registrado`)
        }
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un TG  
//testear
router.put('/trabajos_grado/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { num_consejo, id_comite, modalida, fec_aprobacion, titulo } = req.body;
        const updateTG = await pool.query("UPDATE trabajos_grado SET num_consejo = $1 , id_comite  = $2, modalidad  = $3, fec_aprobacion  = $4, titulo  = $5  WHERE cedula_t = $6;",
            [num_consejo, id_comite, modalida, fec_aprobacion, titulo, id])
            .then(() => {
                res.json(`El TG de C.I V-${id} ha sido actualizado exitosamente`);
            })
            .catch((err) => {
                res.json(err.message)
            })

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un TG
//recibira el id del trabajo de grado pero se puede cambiar por la cedula
router.delete('/trabajos_grado/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTG = await pool.query("DELETE FROM trabajos_grado WHERE id_tg = $1", [id])
            .then(() => {
                res.json(`El tesista C.I V-${id} ha sido eliminado exitosamente`)
            })
            .catch((err) => {
                res.json(`El tesista C.I V-${id} no ha podido ser eliminado`)
            })
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})
module.exports = router;