const express = require('express')
const pool = require('../db')
const { route } = require('./especialidades')
const router = express.Router()

router.get('/tutores_emp', async(req,res) => {
    try {
        const tutores = await pool.query("SELECT * FROM Tutores;")
        res.body = tutores;
    } catch (err) {
        res.body = err.message;
        console.log(err.message);
    }
})

//Registrar un Tutor Empresarial
router.post ('/tutores_emp', async (req,res) => {
    try {
        const { codigo,nombre } = req.body;
        const newTE = await pool.query(
            "INSERT INTO tutores_empresariales ( codigo_emp, nombre_tutor ) VALUES( $1, $2 ) RETURNING * ",
            [codigo, nombre]
        );

        res.json(newTE.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Un Tutor Empresarial

router.get ('/tutores_emp/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const TE = await pool.query ("SELECT * FROM tutores_empresariales WHERE cod_tutor = $1", [id]);

        res.json (TE.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar un Tutor Empresarial  

router.put('tutores_emp/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { codigo,nombre } = req.body;
        const updateTE = await pool.query ("UPDATE tutores_empresariales SET cod_emp = $1 , nombre_tutor  = $2 ) WHERE cod_tutor = $3",
        [codigo,nombre,id]);
        
        res.json ("Tutor Actualizado");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un TG

router.delete ('tutores_emp/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteTE = await pool.query ("DELETE FROM tutores_empresariales WHERE cod_tutor = $1",[id]);
        
        res.json("Tutor Eliminado")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router