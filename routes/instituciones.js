const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/instituciones', async(req,res) => {
    try {
        const instituciones = await pool.query("SELECT * FROM Instituciones;");
        res.body = instituciones;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;