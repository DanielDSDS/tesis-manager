const express = require('express')
const pool = require('../db')
const router = express.Router() 

router.get('/especialidades', async(req,res) => {
    try{
        const especialidades = await pool.query("SELECT * FROM Especialidades;");
        res.json(especialidades);
    }catch(err){
        res.json(err.message);
        console.log(err.message);
    }
})

module.exports = router;