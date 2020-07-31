const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/consejos', async(req,res) => {
    try {
        const consejos = await pool.query("SELECT * FROM Consejos;");
        res.json(consejos);
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
})

module.exports = router;