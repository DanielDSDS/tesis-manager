const express = require('express')
const pool = require('../db')
const router = express.Router() 

router.get('/especialidades', async(req,res) => {
    try{
        const especialidades = await pool.query("SELECT * FROM Especialidades;");
        res.json(especialidades);
        res.body = especialidades;
        console.log(res.body);
    }catch(err){
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar una especialidad
router.post ('/especialidades', async (req,res) => {
    try {
        const { nombre } = req.body;
        const newEspecialidad = await pool.query(
            "INSERT INTO especialidades ( nombre_esp ) VALUES( $1 ) RETURNING * ",
            [nombre]
        );

        res.json(newEspecialidad.rows[0]);
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Get Una especialidad

router.get ('/especialidades/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const especialidades = await pool.query ("SELECT * FROM especialidades WHERE cod_esp = $1", [id]);

        res.json (especialidades.rows[0]);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});


//Actualizar una especialidad

router.put('especialidades/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const { nombre } = req.body;
        const updateEspecialidad = await pool.query ("UPDATE especialidades SET nombre_esp = $1 ) WHERE cod_esp = $2",
        [nombre,id]);
        
        res.json ("Especialidad Actualizada");

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una especialidad

router.delete ('especialidad/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteEspecialidad = await pool.query ("DELETE FROM especialidades WHERE cod_esp = $1",[id]);
        
        res.json("Especialidad Eliminada")
        
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})


module.exports = router;