const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/propuestas', async(req,res) => {
    try {
        const propuestas = await pool.query("SELECT * FROM Propuestas;");
        res.json(propuestas);
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
})

module.exports = router;