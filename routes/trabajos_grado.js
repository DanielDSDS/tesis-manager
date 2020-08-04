const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/trabajos_grado', async(req,res) => {
    try {
        const trabajos_grado = await pool.query("SELECT * FROM Trabajos_grado;");
        res.body = trabajos_grado;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;