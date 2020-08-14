const express = require('express');
const pool = require('../db');
const router = express.Router();


//works
router.get('/trabajos_grado', async (req, res) => {
    try {
        const trabajos_grado = await pool.query("SELECT id_tg,id_propuesta,modalidad,to_char(fec_aprobacion,'DD-MM-YYYY'),titulo FROM Trabajos_grado;");
        res.body = trabajos_grado;
        res.json(trabajos_grado.rows);
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
    }
})

//Registrar un TG
//por testear
router.post('/trabajos_grado', async (req, res) => {
    const { id_propuesta, modalidad, titulo } = req.body;
    try {
        const newTG = await pool.query(
            "INSERT INTO trabajos_grado ( modalidad, titulo,id_propuesta ) VALUES($1, $2, $3) RETURNING *;",
            [modalidad, titulo, id_propuesta]
        )
            .then(() => {
                if (modalidad === "Experimental") {
                    const { cedula_p } = req.body;
                    pool.query("INSERT INTO Experimentales (  id_tg, cedula_p ) VALUES ( (SELECT id_tg FROM trabajos_grado WHERE trabajos_grado.id_propuesta = $1), $2) RETURNING * ",
                        [id_propuesta, cedula_p])
                } else {
                    const { cod_emp } = req.body;
                    pool.query("INSERT INTO Instrumentales (  id_tg, cod_emp ) VALUES ( (SELECT id_tg FROM trabajos_grado WHERE trabajos_grado.id_propuesta = $1), $2) RETURNING * ",
                        [id_propuesta, cod_emp])
                }
            })
            .catch((err) => {
                res.json(`El Trabajo de Grado de ${titulo} no pudo ser creado`);
            })

    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})

//Get Un TG
//testear
router.get('/trabajos_grado/:id', async (req, res) => {
    const { id } = req.params
    try {
        const TG = await pool.query("SELECT * FROM Trabajos_grado WHERE cedula_t = $1;", [id])
        if (TG.rows[0]) {
            res.json(TG.rows[0]);
        } else {
            res.json(`El trabajos_grado ${id} no esta registrado`)
        }
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});


//Actualizar un TG  
//testear
router.put('/trabajos_grado/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { num_consejo, id_comite, modalida, fec_aprobacion, titulo } = req.body;
        const updateTG = await pool.query("UPDATE trabajos_grado SET num_consejo = $1 , id_comite  = $2, modalidad  = $3, fec_aprobacion  = $4, titulo  = $5  WHERE cedula_t = $6;",
            [num_consejo, id_comite, modalida, fec_aprobacion, titulo, id])
            .then(() => {
                res.json(`El TG de C.I V-${id} ha sido actualizado exitosamente`);
            })
            .catch((err) => {
                res.json(err.message)
            })

    } catch (err) {
        res.body = err.message;
        console.log(res.body);
    }
});

router.put('/tg/:id', async (req, res) => {
    const { id } = req.params
    try {
        const { num_consejo, titulo, cod_tutor, cedula_p1, cedula_p2, cedula_p3, fec_aprobacion, modalidad } = req.body
        const updateTG = await pool.query(
            "UPDATE trabajo_grado SET num_consejo=$1, titulo=$2,fec_aprobacion=$3 WHERE id_tg=$4",
            [num_consejo, titulo, fec_aprobacion, id]
        )
            .then(res => res.json('200 tg'))

        if (modalidad = "Experimental") {
            const j1 = await pool.query(
                "INSERT INTO Experimentales (id_tg,cedula_p) VALUES($1,$2);",
                [id_tg, cedula_p]
            )
                .then(res => res.json('200 e'))
        }

        const j1 = await pool.query(
            "INSERT INTO Jueces (id_tg,cedula_p,nombre_p) VALUES($1,$2,(SELECT nombre_p FROM Profesores WHERE cedula_p = $2));",
            [id_tg, cedula_p1]
        )
            .then(res => res.json('200 j1'))

        const j2 = await pool.query(
            "INSERT INTO Jueces (id_tg,cedula_p,nombre_p) VALUES($1,$2,(SELECT nombre_p FROM Profesores WHERE cedula_p = $2));",
            [id_tg, cedula_p2]
        )
            .then(res => res.json('200 j2'))

        const j3 = await pool.query(
            "INSERT INTO Jueces (id_tg,cedula_p,nombre_p) VALUES($1,$2,(SELECT nombre_p FROM Profesores WHERE cedula_p = $2));",
            [id_tg, cedula_p3]
        )
            .then(res => res.json('200 j3'))


    } catch (err) {
        res.json(err.message)
        console.log(err.message)
    }
})

router.put('/trabajogrado/:id', async (req, res) => {
    const { id } = req.params
    try {
        const { num_consejo, modalidad, fec_aprobacion } = req.body
        const updateTrabajoGrado = await pool.query
            ("UPDATE trabajo_grado SET num_consejo=$1, modalidad=$2, fec_aprobacion=$3 WHERE id_tg=$4",
                [num_consejo, modalidad, fec_aprobacion, id])
        if (updateTrabajoGrado.rows[0]) {
            res.json(`200`);
        } else {
            res.json(`400`);
        }


    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
});

//Borar un TG
//recibira el id del trabajo de grado pero se puede cambiar por la cedula
router.delete('/trabajos_grado/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTG = await pool.query("DELETE FROM trabajos_grado WHERE id_tg = $1", [id])
            .then(() => {
                res.json(`El tesista C.I V-${id} ha sido eliminado exitosamente`)
            })
            .catch((err) => {
                res.json(`El tesista C.I V-${id} no ha podido ser eliminado`)
            })
    } catch (err) {
        res.body = err.message;
        res.json(err.message);
        console.log(res.body);
    }
})
module.exports = router;