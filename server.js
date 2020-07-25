const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//guardar credenciales de la bd
const pool = require('./db')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//puerto donde va a correr el back (si esta en produccion correra en port y si no correra en localhost5000)
const normalizePort = port => parseInt(port,10)
const PORT = normalizePort(process.env.PORT || 3000)
const app = express()
const dev = app.get('env') !== 'production'

app.use(cors())
app.use(express.json())

if(!dev){
    app.use(compression())
    app.use(morgan('common'))
    app.use(express.static(path.resolve(__dirname,'dist')))
}else{
    app.use(morgan('dev'))
}

app.get('/test', async(req,res) => {
    try{
        console.log('El servidor esta corriendo');
        res.json('Servidor backend corriendo');
    }catch(err){
        console.log(err.message);
    }
});

//aqui se tienen que importar los endpoints o se pueden escribir aca directamente

const server = createServer(app);
server.listen(PORT, err => {
    if(err) throw err
    console.log('Servidor iniciado en localhost:',PORT);
})