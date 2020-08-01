const express = require('express')
const router = express.Router()
const pool = require('../db')

router.get('/defensas',async(req,res) => {
    try {
        const defensas = await pool.query("SELECT * FROM Defensas;")
        res.body = defensas;
        console.log(defensas);
    } catch (err) {
        res.body = err.message;
        console.log(res.body)
    }
})

module.exports = router
