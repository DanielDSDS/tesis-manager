const express = require('express');
const pool = require('../db');
const router = express.Router();

//wokrs
router.get('/anexo_instrumental_jurado', async (req, res) => {
    try {
        const anexoIJ = await pool.query('SELECT * FROM anexo_instrumental_jurado');
        res.body = anexoIJ;
        res.json(anexoIJ.rows);
        console.log(res.body);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

// function getLocalDate() {
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     return today;
// }

//Registrar un comite
//works
router.post('/anexo_instrumental_jurado', async (req, res) => {
    try {
        const { id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, presentacion, identificacionproblema, objetivos, limitaciones, seleccion, justificacion, metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, desenvolvimiento, demostracion, respuestase, jurado, tota300, total20, mencionh, justificacionh } = req.body;
        const newAnexoIJ = await pool.query(
            "INSERT INTO anexo_instrumental_jurado ( id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, presentacion, identificacionproblema, objetivos, limitaciones, seleccion, justificacion, metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, desenvolvimiento, demostracion, respuestase, jurado, tota300, total20, mencionh, justificacionh ) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40 ) ",
            [id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, presentacion, identificacionproblema, objetivos, limitaciones, seleccion, justificacion, metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, desenvolvimiento, demostracion, respuestase, jurado, tota300, total20, mencionh, justificacionh]
        );

        res.json(`Anexo creado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un comite
//works
router.get('/anexo_instrumental_jurado/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const AnexoIJ = await pool.query("SELECT * FROM anexo_instrumental_jurado WHERE id_tg = $1", [id]);

        if (AnexoIJ.rows[0]) {
            res.json(AnexoIJ.rows[0]);
        } else {
            res.json(`No existe ningun Anexo de codigo ${id}`)
        }

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un comite
//works
router.put('/anexo_instrumental_jurado/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, presentacion, identificacionproblema, objetivos, limitaciones, seleccion, justificacion, metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, desenvolvimiento, demostracion, respuestase, jurado, tota300, total20, mencionh, justificacionh } = req.body;
        const updateAnexo = await pool.query("UPDATE anexo_instrumental_academico SET tema_propuesta = $1, organizacion = $2, criterio1 = $3, criterio2 = $4, criterio3 = $5, criterio4 = $6, criterio5 = $7, criterio6 = $8,decision_revisor = $9, observaciones = $10, fec_revision = $11, presentacion = $12, identificacionproblema = $13, objetivos = $14, limitaciones = $15, seleccion = $16, justificacion = $17, metodologia = $18, documentacion = $19, precisionproducto = $20, cumplimientoobj = $21, recomendacionpt = $22, definicion = $23, profundidad = $24, validez = $25, recomendaciones = $26, bibliografia = $27, tiempo = $28, contenido = $29, calidad = $30, desenvolvimiento = $31, demostracion = $32, respuestase = $33, jurado = $34, tota300 = $35, total20 = $36, mencionh = $37, justificacionh = $38 WHERE id_tg = $39;",
            [tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, presentacion, identificacionproblema, objetivos, limitaciones, seleccion, justificacion, metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, desenvolvimiento, demostracion, respuestase, jurado, tota300, total20, mencionh, justificacionh, id]);

        res.json(`El Anexo ${id} ha sido actualizado exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un comite
//works
router.delete('/anexo_instrumental_jurado/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAnexo = await pool.query("DELETE FROM anexo_instrumental_jurado WHERE id_tg = $1", [id]);

        res.json(`El Anexo ${id} ha sido eliminado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

module.exports = router;