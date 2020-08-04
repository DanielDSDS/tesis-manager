const express = require('express');
const pool = require('../db');
const router = express.Router();

//Esto es el standby mas mierda de toda la vida ya que 3/4 de los datos son otros querys que no pueddo probar por que da 404 con todo 

router.get('/propuestas', async(req,res) => {
    try {
        const propuestas = await pool.query("SELECT * FROM Propuestas;");
        res.body = propuestas;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})


//Registrar una propuesta

router.post ('/propuestas', async (req,res) => {
    try {
        const { cedula, titulo} = req.body;
        //fecha  = funcion para tomar la fecha
        const newPropuesta = await pool.query(
            "INSERT INTO propuestas ( cedula_p, titulo, fec-entrega ) VALUES( $1, $2, $3 ) RETURNING * ",
            [cedula,titulo,fecha]
        );

        res.json(newPropuesta.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get una propuesta

router.get ('/propuestas/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const propuestas = await pool.query ("SELECT * FROM propuestas WHERE id_propueta = $1", [id]);

        res.json (propuestas.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar una propuesta

router.put('propuestas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { comite,tg,estatus,veredicto,title,title_p,observaciones,f_comite,f_veredicto } = req.body;
        //f_aprovacion = funcion para tomar la fecha
        const updatePropuesta = await pool.query ("UPDATE propuestas SET id_comite = $1, id_tg = $2, estatus_aprovacion = $3, veredicto_profesor = $4, titulo = $5, titulo_propuesta = $6, observaciones_comite = $7, fec_comite = $7, fec_veredicto = $8, fec_aprovacion = $9 ) WHERE id_propuesta = $10",
        [comite,tg,estatus,veredicto,title,title_p,observaciones,f_comite,f_veredicto,f_aprovacion,id]);
        
        res.json ("Propuesta Actualizada");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una propuesta

router.delete ('propuestas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deletePropuesta = await pool.query ("DELETE FROM propuestas WHERE id_propuesta = $1",[id]);
        
        res.json("Propuesta Eliminada")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;