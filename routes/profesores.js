const express = require('express');
const pool = require('../db');
const router = express.Router();

//Get todos los profesores
router.get('/profesores', async(req,res) => {
    try{
        const profesores = await pool.query("SELECT * FROM Profesores;");
        res.body = profesores;
    }catch(err){
        res.body = err.message
        console.log(res.body);
    }
})

//Registrar un profesor
router.post ('/profesores', async (req,res) => {
    try {
        const { cedula,nombre,direccion,correo,telefono } = req.body;
        const newProfesor = await pool.query(
            "INSERT INTO profesores ( cedula_p, nombre_p, direccion_p, correo_p, telefono_p ) VALUES( $1, $2, $3, $4, $5 ) RETURNING * ",
            [cedula,nombre,direccion,correo,telefono]
        );

        res.json(newProfesor.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Un profesor
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.get ('/profesores/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const profesores = await pool.query ("SELECT * FROM profesores WHERE cedula_p = $1", [id]);

        res.json (profesores.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar un profesor
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.put('profesores/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { nombre,direccion,correo,telefono } = req.body;
        const updateProfesor = await pool.query ("UPDATE profesores SET nombre_p = $1, direccion_p = $2, correo_p = $3, telefono_p = $4 ) WHERE cedula_p = $5",
        [nombre,direccion,correo,telefono,id]);
        
        res.json ("Profesor Actualizado");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar un Profesor
//La parte de params hay que verla mejor por que se supone que tiene que ser la cedula

router.delete ('profesores/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteProfesor = await pool.query ("DELETE FROM profesores WHERE cedula_p = $1",[id]);
        
        res.json("Profesor Eliminado")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;