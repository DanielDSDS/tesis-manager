const express = require('express')
const pool = require('../db')
const router = express.Router() 

router.get('/especialidades', async(req,res) => {
    try{
        const especialidades = await pool.query("SELECT * FROM Especialidades;");
        res.json(especialidades);
        res.body = especialidades;
        console.log(res.body);
    }catch(err){
        res.body = err.message;
        console.log(res.body);
    }
})

module.exports = router;