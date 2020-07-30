const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/comites', async(req,res) => {
    try {
        const comites = await pool.query('SELECT * FROM Comites;');
        res.json(comites);
    } catch (err) {
        res.json(err);
        console.log(err.message);
    }
})

module.exports = router;