const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/defensas',async(req,res) => {
    try {
        const defensas = await pool.query("SELECT * FROM Defensas;")
        res.body = defensas;
        console.log(defensas);
    } catch (err) {
        res.body = err.message;
        console.log(res.body)
    }
})

//Registrar una defensa
router.post ('/defensas', async (req,res) => {
    try {
        const { fecha, cedula, hora } = req.body;
        const newDefensa = await pool.query(
            "INSERT INTO defensas ( fec_pres, cedula_t, hora_pres ) VALUES( $1, $2, $3 ) RETURNING * ",
            [fecha,cedula,hora]
        );

        res.json(newDefensas.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get una defensa

router.get ('/defensas/:id', async (req,res) => {
    try {
        //el id seria la cedula del tesista ya que no tienen id xd
        const {id} = req.params;
        const defensas = await pool.query ("SELECT * FROM defensas WHERE cedula_t = $1", [id]);

        res.json (defensas.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar una defensa

router.put('defensas/:id', async (req,res) =>{
    try {
        //el id seria la cedula del tesista ya que no tienen id xdd
        const {id} = req.params;
        const { fecha, hora } = req.body;
        const updateDefensa = await pool.query ("UPDATE defensas SET fec_pres = $1 , hora_pres  = $2 ) WHERE cedula_t = $3",
        [fecha,hora,id]);
        
        res.json ("Defensa Actualizada");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una defensa

router.delete ('defensas/:id', async (req,res) =>{
    try {
        //adivina cual es el id
        const {id} = req.params;
        const deleteDefensa = await pool.query ("DELETE FROM defensas WHERE cedula_t = $1",[id]);
        
        res.json("Defensa Eliminada")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})
module.exports = router
