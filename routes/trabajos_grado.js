const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/trabajos_grado', async(req,res) => {
    try {
        const trabajos_grado = await pool.query("SELECT * FROM Trabajos_grado;");
        res.body = trabajos_grado;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar un TG
router.post ('/trabajos_grado', async (req,res) => {
    try {
        const { consejo,cedula,modalidad,fecha,titulo } = req.body;
        const newTG = await pool.query(
            "INSERT INTO trabajos_grado ( num_consejo, cedula_t, modalidad, fec_aprobacion, titulo ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [consejo,cedula,modalidad,fecha,titulo]
        );

        res.json(newTG.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Un TG

router.get ('/trabajos_grado/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const TG = await pool.query ("SELECT * FROM trabajos_grado WHERE id_tg = $1", [id]);

        res.json (TG.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar un TG  

router.put('trabajos_grado/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { consejo,cedula,modalidad,fecha,titulo } = req.body;
        const updateTG = await pool.query ("UPDATE trabajos_grado SET num_consejo = $1 , cedula_t  = $2, modalidad  = $3, fec_aprobacion  = $4, titulo  = $5 ) WHERE id_comite = $6",
        [consejo,cedula,modalidad,fecha,titulo,id]);
        
        res.json ("TG Actualizado");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un TG

router.delete ('trabajos_grado/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteTG = await pool.query ("DELETE FROM trabajos_grado WHERE id_tg = $1",[id]);
        
        res.json("TG Eliminado")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router;