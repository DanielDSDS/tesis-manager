const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/consejos', async(req,res) => {
    try {
        const consejos = await pool.query("SELECT * FROM Consejos;");
        res.body = consejos;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar un consejo
router.post ('/consejos', async (req,res) => {
    try {
        const { fecha } = req.body;
        const newConsejo = await pool.query(
            "INSERT INTO consejos ( fec_consejo ) VALUES( $1 ) RETURNING * ",
            [fecha]
        );

        res.json(newConsejo.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Un consejo

router.get ('/consejos/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const consejos = await pool.query ("SELECT * FROM consejos WHERE num_consejo = $1", [id]);

        res.json (consejos.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar un consejo

router.put('consejos/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { fecha } = req.body;
        const updateConsejo = await pool.query ("UPDATE consejos SET fec_consejo = $1 ) WHERE num_consejo = $2",
        [fecha,id]);
        
        res.json ("Consejo Actualizado");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un consejo

router.delete ('consejos/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteConsejo = await pool.query ("DELETE FROM consejos WHERE num_consejo = $1",[id]);
        
        res.json("Consejo Eliminado")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router;