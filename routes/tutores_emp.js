const express = require('express')
const pool = require('../db')
const { route } = require('./especialidades')
const router = express.Router()

router.get('/tutores_emp', async(req,res) => {
    try {
        const tutores = await pool.query("SELECT * FROM Tutores;")
        res.body = tutores;
    } catch (err) {
        res.body = err.message;
        console.log(err.message);
    }
})

module.exports = router