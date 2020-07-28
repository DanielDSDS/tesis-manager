const express = require('express')
const router = express.Router()

router.get('/test', async(req,res) => {
    try{
        res.json('Servidor backend corriendo aja')
    }catch(err){
        console.log(err.message)
    }
})

module.exports = router