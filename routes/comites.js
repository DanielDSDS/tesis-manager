const express = require('express');
const pool = require('../db');
const router = express.Router();

//wokrs
router.get('/comites', async (req, res) => {
    try {
        const comites = await pool.query("SELECT id_comite,to_char(fec_realizacion,'DD-MM-YYYY'),to_char(fec_asignacion,'DD-MM-YYYY') FROM Comites;");
        res.body = comites;
        res.json(comites.rows);
        console.log(res.body);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

function getLocalDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

//Registrar un comite
//works
router.post('/comites', async (req, res) => {
    try {
        const fec_asignacion = getLocalDate();
        const { fec_realizacion } = req.body;
        const newComite = await pool.query(
            "INSERT INTO comites ( fec_asignacion, fec_realizacion ) VALUES( $1, $2 ) ",
            [fec_asignacion, fec_realizacion]
        );

        res.json(`Comite creado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un comite
//works
router.get('/comites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comites = await pool.query("SELECT * FROM comites WHERE id_comite = $1", [id]);

        if (comites.rows[0]) {
            res.json(comites.rows[0]);
        } else {
            res.json(`No existe ningun comite de codigo ${id}`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un comite
//works
router.put('/comites/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { fec_asignacion, fec_realizacion } = req.body;
        const updateComite = await pool.query("UPDATE comites SET fec_asignacion=$1 , fec_realizacion=$2 WHERE id_comite=$3;",
            [fec_asignacion, fec_realizacion, id]);

        res.json(`El comite ${id} ha sido actualizado exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un comite
//works
router.delete('/comites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteComite = await pool.query("DELETE FROM comites WHERE id_comite = $1", [id]);

        res.json(`El comite ${id} ha sido eliminado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

module.exports = router;