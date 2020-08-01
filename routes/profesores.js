const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/profesores', async(req,res) => {
    try{
        const profesores = await pool.query("SELECT * FROM Profesores;");
        res.body = profesores;
    }catch(err){
        res.body = err.message
        console.log(res.body);
    }
})

module.exports = router;