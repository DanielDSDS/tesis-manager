const express = require('express')
const pool = require('../db')
const router = express.Router()


//works
router.get('/empresas', async (req, res) => {
    try {
        const empresas = await pool.query("SELECT * FROM empresas;")
        res.body = empresas;
        res.json(empresas.rows);
    } catch (err) {
        res.body = err.message;
        console.log(err.message);
        res.json(err.message);
    }
})

//Registrar una empresa
//works
router.post('/empresas', async (req, res) => {
    const { nombre_emp } = req.body;
    try {
        const newEmpresa = await pool.query(
            "INSERT INTO empresas ( nombre_emp ) VALUES( $1 ) RETURNING * ",
            [nombre_emp]
        );

        res.json(newEmpresa.rows[0]);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Una Empresa
//works
router.get('/empresas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const Empresas = await pool.query("SELECT * FROM empresas WHERE cod_emp = $1", [id]);

        if (Empresas.rows[0]) {
            res.json(Empresas.rows[0]);
        } else {
            res.json(`No existe ninguna empresa de codigo ${id}`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar una Empresa 
//works
router.put('/empresas/:id', async (req, res) => {
    const { nombre_emp } = req.body;
    try {
        const { id } = req.params;
        const updateEmpresa = await pool.query("UPDATE empresas SET nombre_emp=$1 WHERE cod_emp=$2",
            [nombre_emp, id]);

        res.json(`La empresa ${nombre_emp} ha sido modificada exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar una Empresa
//works
router.delete('/empresas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEmpresas = await pool.query("DELETE FROM empresas WHERE cod_emp = $1", [id]);

        res.json(`La empresa de codigo ${id} ha sido eliminada exitosamente`)

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})
module.exports = router