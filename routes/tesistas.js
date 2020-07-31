const express = require('express')
const router = express.Router()
const pool = require('../db');

router.get('/tesistas', async(req,res) => {
    try{
        const tesistas = await pool.query("SELECT * FROM Tesistas;");
        res.body = tesistas;
    }catch(err){
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router