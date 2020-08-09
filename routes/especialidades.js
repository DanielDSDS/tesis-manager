const express = require('express')
const pool = require('../db')
const router = express.Router()

//works
router.get('/especialidades', async (req, res) => {
    try {
        const especialidades = await pool.query("SELECT * FROM Especialidades;");
        res.body = especialidades;
        console.log(res.body);
        res.json(especialidades.rows);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Registrar una especialidad
//works
router.post('/especialidades', async (req, res) => {
    try {
        const { nombre_esp } = req.body;
        const newEspecialidad = await pool.query(
            "INSERT INTO especialidades VALUES (DEFAULT, $1 ) RETURNING * ",
            [nombre_esp]
        );
        res.json(`La especialidad ${nombre_esp} ha sido creada exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Una especialidad
//works
router.get('/especialidades/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const especialidades = await pool.query("SELECT * FROM especialidades WHERE cod_esp = $1", [id]);

        if (especialidades.rows[0]) {
            res.json(especialidades.rows[0]);
        } else {
            res.json(`No existe ninguna especialidad de codigo ${id}`)
        }
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar una especialidad
//works
router.put('/especialidades/:id', async (req, res) => {
    const { nombre_esp } = req.body;
    try {
        const { id } = req.params;
        const updateEspecialidad = await pool.query("UPDATE especialidades SET nombre_esp=$1 WHERE cod_esp=$2;",
            [nombre_esp, id]);

        res.json(`La especialidad ${id} ha sido actualizada exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar una especialidad
//works
router.delete('/especialidades/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteEspecialidad = await pool.query("DELETE FROM especialidades WHERE cod_esp = $1;", [id]);
        res.json(`La epsecialidad de codigo ${id} ha sido eliminada exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

module.exports = router;