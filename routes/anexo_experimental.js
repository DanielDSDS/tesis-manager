const express = require('express');
const pool = require('../db');
const router = express.Router();

//wokrs
router.get('/anexo_experimental', async (req, res) => {
    try {
        const anexoE = await pool.query('SELECT * FROM anexo_experimental');
        res.body = anexoE;
        res.json(anexoE.rows);
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
router.post('/anexo_experimental', async (req, res) => {
    try {
        const { id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio5, decision_revisor, observaciones, fec_revision, margenes, encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor, toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp } = req.body;
        const newAnexoE = await pool.query(
            "INSERT INTO anexo_experimental ( id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio5, decision_revisor, observaciones, fec_revision, margenes, encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor, toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp ) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52 ) ",
            [id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio5, decision_revisor, observaciones, fec_revision, margenes, encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor, toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp]
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
router.get('/anexo_experimental/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const AnexoE = await pool.query("SELECT * FROM anexo_experimental WHERE id_tg = $1", [id]);

        if (AnexoE.rows[0]) {
            res.json(AnexoE.rows[0]);
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
router.put('/anexo_experimental/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { /*id_tg, cedula_p,*/ tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio5, decision_revisor, observaciones, fec_revision, margenes, encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor, toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp } = req.body;
        const updateAnexo = await pool.query("UPDATE anexo_experimental SET  tema_propuesta = $1, organizacion = $2, criterio1 = $3, criterio2 = $4, criterio3 = $5, criterio4 = $6, criterio5 = $7, criterio5 = $8, decision_revisor = $9, observaciones = $10, fec_revision = $11, margenes = $12, encuadernado = $13, precision = $14, claridad = $15, brevedad = $16, id_problema = $17, objetivos = $18, importancia = $19, limitaciones = $20, seleccion = $21, uso = $22, precisionp = $23, cumplimientoobj = $24, aplicacion = $25, alcance = $26, profundidad = $27, validez = $28, recomendaciones = $29, bibliografia = $30, tiempo = $31, contenido = $32, demostracion = $33, calidad = $34, desenvolvimiento = $35, respuestas = $36, calidad2 = $37, desenvolvimiento2 = $38, respuestas2 = $39, pjurado = $40, jurado = $41, tutor = $42, toral1300 = $43, total120 = $44, total2300 = $45, total220 = $46, mencionh = $47, justificacionh = $48, mencionp = $49, justificacionp = $50 WHERE id_tg = $51",
            [tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio5, decision_revisor, observaciones, fec_revision, margenes, encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor, toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp, id]);

        res.json(`El Anexo ${id} ha sido actualizado exitosamente`);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un comite
//works
router.delete('/anexo_experimental/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAnexo = await pool.query("DELETE FROM anexo_experimental WHERE id_tg = $1", [id]);

        res.json(`El Anexo ${id} ha sido eliminado exitosamente`);

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

module.exports = router;