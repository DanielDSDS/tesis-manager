const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/instituciones', async(req,res) => {
    try {
        const instituciones = await pool.query("SELECT * FROM Instituciones;");
        res.body = instituciones;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar una Institucion
router.post ('/instituciones', async (req,res) => {
    try {
        const { nombre } = req.body;
        const newInstitucion= await pool.query(
            "INSERT INTO instituciones ( nombre_inst ) VALUES( $1 ) RETURNING * ",
            [nombre]
        );

        res.json(newInstitucion.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Una Institucion

router.get ('/instituciones/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const instituciones = await pool.query ("SELECT * FROM instituciones WHERE cod_inst = $1", [id]);

        res.json (comites.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar una institucion

router.put('instituciones/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { nombre } = req.body;
        const updateInstitucion = await pool.query ("UPDATE instituciones SET nombre_inst = $1 ) WHERE cod_inst = $2",
        [nombre,id]);
        
        res.json ("Institucion Actualizada");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una Institucion

router.delete ('instituciones/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteInstitucion = await pool.query ("DELETE FROM instituciones WHERE cod_inst = $1",[id]);
        
        res.json("Institucion Eliminada")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router;