const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/propuestas', async(req,res) => {
    try {
        const propuestas = await pool.query("SELECT * FROM Propuestas;");
        res.body = propuestas;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;