const express = require('express')
const pool = require('../db')
const { route } = require('./empresas')
const router = express.Router()

router.get('/empresas', async(req,res) => {
    try {
        const empresas = await pool.query("SELECT * FROM empresas;")
        res.body = empresas;
    } catch (err) {
        res.body = err.message;
        console.log(err.message);
    }
})

//Registrar una empresa
router.post ('/empresa', async (req,res) => {
    try {
        const { nombre } = req.body;
        const newEmpresa = await pool.query(
            "INSERT INTO empresa ( nombre_emp ) VALUES( $1 ) RETURNING * ",
            [nombre]
        );

        res.json(newEmpresa.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Una Empresa

router.get ('/empresas/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const Empresas = await pool.query ("SELECT * FROM empresas WHERE cod_emp = $1", [id]);

        res.json (Empresas.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar una Empresa 

router.put('empresas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { nombre } = req.body;
        const updateEmpresa = await pool.query ("UPDATE emprsa SET nombre_emp = $1 ) WHERE cod_emp = $2",
        [nombre,id]);
        
        res.json ("Empresa Actualizada");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una Empresa

router.delete ('empresas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteEmpresas = await pool.query ("DELETE FROM empresas WHERE cod_emp = $1",[id]);
        
        res.json("Empresa Eliminada")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router