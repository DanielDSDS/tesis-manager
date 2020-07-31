const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/comites', async(req,res) => {
    try {
        const comites = await pool.query('SELECT * FROM Comites;');
        res.body = comites;
        console.log(res.body);
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;