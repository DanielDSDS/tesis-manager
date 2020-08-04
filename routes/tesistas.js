const express = require('express')
const router = express.Router()
const pool = require('../db');
const { red } = require('@material-ui/core/colors');


//Get totos los tesistas
router.get('/tesistas', async(req,res) => {
    try{
        const tesistas = await pool.query("SELECT * FROM Tesistas;");
        res.body = tesistas;
    }catch(err){
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar un tesista
router.post ('/tesistas', async (req,res) => {
    try {
        const { cedula,nombre,correo_U,correo_P,tlf } = req.body;
        const newTesista = await pool.query(
            "INSERT INTO tesistas ( cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [cedula,nombre,correo_U,correo_P,tlf]
        );

        res.json(newTesista.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Un tesista
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.get ('/tesistas/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const tesista = await pool.query ("SELECT * FROM tesistas WHERE cedula_t = $1", [id]);

        res.json (tesista.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar un tesista (No creo que eso se use)
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.put('tesistas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { nombre,correo_U,correo_P,tlf } = req.body;
        const updateTesista = await pool.query ("UPDATE tesistas SET nombre_t = $1, correo_ucab_t = $2, correo_particular_t = $3, telefono_contacto_t = $4 ) WHERE cedula_t = $5",
        [nombre,correo_U,correo_P,tlf,id]);
        
        res.json ("Tesista Actualizado");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un Tesista
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.delete ('tesistas/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteTesista = await pool.query ("DELETE FROM tesistas WHERE cedula_tesista = $1",[id]);
        
        res.json("Tesista Eliminado")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})





module.exports = router