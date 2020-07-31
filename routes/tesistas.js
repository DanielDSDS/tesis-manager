const express = require('express')
const router = express.Router()
const pool = require('../db');

router.get('/tesistas', async(req,res) => {
    try{
        const tesistas = await pool.query("SELECT * FROM Tesistas;");
        res.json(tesistas);
    }catch(err){
        res.json(err.message);
        console.log(err.message);
    }
})

module.exports = router