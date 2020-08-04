const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/consejos', async(req,res) => {
    try {
        const consejos = await pool.query("SELECT * FROM Consejos;");
        res.body = consejos;
    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;