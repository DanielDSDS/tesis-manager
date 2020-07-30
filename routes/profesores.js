const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/profesores', async(req,res) => {
    try{
        const profesores = await pool.query("SELECT * FROM Profesores;");
        res.json(profesores);
    }catch(err){
        res.json(err.message);
        console.log(err.message);
    }
})

module.exports = router;