const express = require('express');
const pool = require('../db');
const router = express.Router();


//works
router.get('/consejos', async (req, res) => {
    try {
        const consejos = await pool.query("SELECT * FROM Consejos;");
        res.body = consejos;
        res.json(consejos.rows);
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
        res.json(err.message);
    }
})

//Registrar un consejo
//works
router.post('/consejos', async (req, res) => {
    try {
        const { fecha } = req.body;
        const newConsejo = await pool.query(
            "INSERT INTO consejos ( fec_consejo ) VALUES( $1 ) RETURNING * ",
            [fecha]
        );

        res.json(`Consejo creado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un consejo
//works
router.get('/consejos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const consejos = await pool.query("SELECT * FROM consejos WHERE num_consejo = $1", [id]);

        if (consejos.rows[0]) {
            res.json(consejos.rows[0]);
        } else {
            res.json(`No existe ningun consejo de codigo ${id}`)
        }
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un consejo
//works
router.put('/consejos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { fecha } = req.body;
        const updateConsejo = await pool.query("UPDATE consejos SET fec_consejo=$1 WHERE num_consejo=$2",
            [fecha, id]);

        res.json(`Consejo ${id} ha actualizado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un consejo
//works
router.delete('/consejos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteConsejo = await pool.query("DELETE FROM consejos WHERE num_consejo=$1", [id]);
        res.json(`El consejo ${id} ha sido eliminado exitosamente`)

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})
module.exports = router;