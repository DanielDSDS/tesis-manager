const express = require('express')
const router = express.Router()
const pool = require('../db')


//works
router.get('/defensas', async (req, res) => {
    try {
        const defensas = await pool.query("SELECT cedula_t, to_char(fec_pres,'DD-MM-YYYY'), hora_pres FROM Defensas;")
        res.body = defensas;
        res.json(defensas.rows);
        console.log(defensas);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body)
    }
})

//Registrar una defensa
//works
router.post('/defensas', async (req, res) => {
    const { fec_pres } = req.body;
    try {
        const { cedula_t, hora_pres } = req.body;
        const newDefensa = await pool.query(
            "INSERT INTO defensas ( fec_pres, cedula_t, hora_pres ) VALUES( $1, $2, $3 ) RETURNING * ",
            [fec_pres, cedula_t, hora_pres]
        );
        res.json(`La defensa para el ${fec_pres} ha sido creada exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get una defensa
//works
router.get('/defensas/:id', async (req, res) => {
    try {
        //el id seria la cedula del tesista ya que no tienen id xd
        const { id } = req.params;
        const defensas = await pool.query("SELECT * FROM defensas WHERE cedula_t = $1", [id]);

        if (defensas.rows[0]) {
            res.json(defensas.rows[0]);
        } else {
            res.json(`No existe ninguna defensa para el tesista C.I V-${id}`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar una defensa
//works
router.put('/defensas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { fec_pres, hora_pres } = req.body;
        const updateDefensa = await pool.query("UPDATE defensas SET fec_pres=$1 , hora_pres=$2 WHERE cedula_t=$3",
            [fec_pres, hora_pres, id]);

        res.json(`La defensa para C.I V-${id} ha sido modificada para la fecha ${fec_pres} exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar una defensa
//works
router.delete('/defensas/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const deleteDefensa = await pool.query("DELETE FROM defensas WHERE cedula_t = $1", [id]);
        res.json(`La defensa de C.I V-${id} ha sido eliminada exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})
module.exports = router
