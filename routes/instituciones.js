const express = require('express');
const router = express.Router();
const pool = require('../db');


//works
router.get('/instituciones', async (req, res) => {
    try {
        const instituciones = await pool.query("SELECT * FROM Instituciones;");
        res.body = instituciones;
        res.json(instituciones);
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

//Registrar una Institucion
//works
router.post('/instituciones', async (req, res) => {
    const { nombre_inst } = req.body;
    try {
        const newInstitucion = await pool.query(
            "INSERT INTO instituciones ( nombre_inst ) VALUES( $1 ) RETURNING * ",
            [nombre_inst]
        );

        res.json(`La institucion ${nombre_inst} ha sido añadida exitosamente`)

    } catch (err) {
        res.body = err.message;
        res.json(`La institucion ${nombre_inst} no ha podido ser añadido`)
        console.log(res.body);
    }
})

//Get Una Institucion
//works
router.get('/instituciones/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const instituciones = await pool.query("SELECT * FROM instituciones WHERE cod_inst = $1", [id]);

        if (instituciones.rows[0]) {
            res.json(instituciones.rows[0]);
        } else {
            res.json(`La empresa de codigo ${id} no existe`)
        }
    } catch (err) {
        res.body = err.message;
        res.json(`La empresa de codigo ${id} no existe`)
        console.log(res.body);
    }
});


//Actualizar una institucion
//works
router.put('/instituciones/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { nombre_inst } = req.body;
        const updateInstitucion = await pool.query("UPDATE instituciones SET nombre_inst = $1 WHERE cod_inst = $2",
            [nombre_inst, id]);

        res.json(`La institucion de codigo ${id} ha sido actualizada`);

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

//Borar una Institucion
//works
router.delete('/instituciones/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteInstitucion = await pool.query("DELETE FROM instituciones WHERE cod_inst = $1", [id]);
        res.json(`La institucion ${id} ha sido eliminada`);
    } catch (err) {
        res.body = err.message;
        res.json(`La institucion ${id} no ha podido ser eliminada`)
        console.log(res.body);
    }
});

module.exports = router;