const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/instituciones', async(req,res) => {
    try {
        const instituciones = await pool.query("SELECT * FROM Instituciones;");
        res.json(instituciones);
    } catch (err) {
        res.json(err.message);
    }
})

module.exports = router;