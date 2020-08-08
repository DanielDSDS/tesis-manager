const express = require('express')
const pool = require('../db')
const { route } = require('./especialidades')
const router = express.Router()

//works
router.get('/tutores_emp', async (req, res) => {
    try {
        const tutores = await pool.query("SELECT * FROM Tutores_empresariales;")
        res.body = tutores;
        res.json(tutores);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(err.message);
    }
})

//Registrar un Tutor Empresarial
router.post('/tutores_emp', async (req, res) => {
    try {
        const { cod_emp, nombre_tutor } = req.body;
        const newTE = await pool.query(
            "INSERT INTO tutores_empresariales ( cod_emp, nombre_tutor ) VALUES( $1, $2 ) RETURNING * ",
            [cod_emp, nombre_tutor]
        )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                res.json(err.message);
            })
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
})

//Get Un Tutor Empresarial

router.get('/tutores_emp/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const TE = await pool.query("SELECT * FROM tutores_empresariales WHERE cod_tutor = $1", [id]);
        if (TE.rows[0]) {
            res.json(TE.rows[0]);
        } else {
            res.json(`El Tutor empresarial ${id} no esta registrado`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
});


//Actualizar un Tutor Empresarial  

router.put('tutores_emp/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, nombre } = req.body;
        const updateTE = await pool.query("UPDATE tutores_empresariales SET cod_emp = $1 , nombre_tutor  = $2 ) WHERE cod_tutor = $3",
            [codigo, nombre, id]);

        res.json("Tutor Actualizado");

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
});

//Borar un TG

router.delete('tutores_emp/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTE = await pool.query("DELETE FROM tutores_empresariales WHERE cod_tutor = $1", [id]);

        res.json("Tutor Eliminado")

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
})
module.exports = router