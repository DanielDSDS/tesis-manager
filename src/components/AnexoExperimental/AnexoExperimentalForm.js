import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import useForm from '../useForm/useForm'

// id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6, decision_revisor, observaciones, fec_revision, margenes, 
//encuadernado, precision, claridad, brevedad, id_problema, objetivos, importancia, limitaciones, seleccion, uso, precisionp, cumplimientoobj, aplicacion, alcance, profundidad, 
//validez, recomendaciones, bibliografia, tiempo, contenido, demostracion, calidad, desenvolvimiento, respuestas, calidad2, desenvolvimiento2, respuestas2, pjurado, jurado, tutor,
//toral1300, total120, total2300, total220, mencionh, justificacionh, mencionp, justificacionp 


//Dios mio que horrible es esta tabla
const AnexoExperimentalForm = () => {
    const [profesor, setprofesor] = useState([{}])
    //const [instituciones, setInstituciones] = useState([{}])
    const [toggle, setToggle] = useState(false)
    const proxy = 'jurado'
    const { handleChange, handleSubmit, values } = useForm({
        id_tg: '',
        cedula_p: '',
        tema_propuesta: '',
        organizacion: '',
        criterio1: '',
        criterio2: '',
        criterio3: '',
        criterio4: '',
        criterio5: '',
        criterio6: '',
        decision_revisor: '',
        observaciones: '',
        fec_revision: '',
        margenes: '',
        encuadernado: '',
        precision: '',
        claridad: '',
        brevedad: '',
        id_problema: '',
        objetivos: '',
        importancia: '',
        limitaciones: '',
        seleccion: '',
        uso: '',
        precisionp: '',
        cumplimientoobj: '',
        aplicacion: '',
        alcance: '',
        profundidad: '',
        validez: '',
        recomendaciones: '',
        bibliografia: '',
        tiempo: '',
        contenido: '',
        demostracion: '',
        calidad: '',
        respuestas: '',
        calidad2: '',
        desenvolvimiento2: '',
        respuestas2: '',
        pjurado: '',
        jurado: '',
        tutor: '',
        toral1300: '',
        total120: '',
        total2300: '',
        total220: '',
        mencionh: '',
        justificacionh: '',
        mencionp: '',
        justificacionp: '',
    }, proxy)

    const toggleSelect = ({ target }) => setToggle(target.value == "F" ? true : false)

    const fetchprofesor = () => {
        fetch('http://localhost:3000/profesores')
            .then(res => res.json())
            .then(result => setprofesor(result))
            .catch(err => console.log(err.message))
    }

    // const fetchInstituciones = () => {
    //     fetch('http://localhost:3000/instituciones')
    //         .then(res => res.json())
    //         .then(result => setInstituciones(result))
    //         .catch(err => console.log(err.message))
    // }

    useEffect(() => {
        fetchprofesor()
        //fetchInstituciones()
    }, [])

return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>

                //Mostrar Tema, datos tesista y Datos del tutor

            <FormControl className="form-profesor">
                <InputLabel id="jurado-label">profesor</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="profesor"
                            value={values.cedula_p}
                            name="cedula_p"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                            {profesor.map((profesores, i) => (
                                <MenuItem value={profesores.cedula_p} key={i}>
                                    {profesores.nombre_p}
                                </MenuItem>
                            ))}
                        </Select>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Tema Propuesto"
                            name="titulo"
                            variant="outlined"
                            value={values.tema_propuesta}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Organizacion"
                            name="organizacion"
                            variant="outlined"
                            value={values.organizacion}/>

                    //Criterios    
                    <InputLabel id="jurado-label">criterio1</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio1"
                            value={values.criterio1}
                            name="criterio1"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">criterio2</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio2"
                            value={values.criterio2}
                            name="criterio2"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">criterio3</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio3"
                            value={values.criterio3}
                            name="criterio3"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">criterio4</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio4"
                            value={values.criterio4}
                            name="criterio4"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">criterio5</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio5"
                            value={values.criterio5}
                            name="criterio5"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">criterio6</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="criterio6"
                            value={values.criterio6}
                            name="criterio6"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                    //Mostrar Datos Tesista y Tutor
                    
                    <InputLabel id="jurado-label">decision</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="decision_revisor"
                            value={values.decision_revisor}
                            name="decision_revisor"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "Aprovado" key={i}> A </MenuItem>
                                <MenuItem value = "Reprovado" key={i}> R </MenuItem>
                        </Select>
                        
                        <TextField
                            className="text-field"
                            size="small"
                            label="Observaciones"
                            name="titulo"
                            variant="outlined"
                            value={values.observaciones}/>

                    //Get fecha y asignarlo a fec revision
                    
                    <InputLabel id="jurado-label">margenes</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="margenes"
                            value={values.margenes}
                            name="margenes"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">encuadernado</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="encuadernado"
                            value={values.encuadernado}
                            name="encuadernado"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">precision</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="precision"
                            value={values.precision}
                            name="precision"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">claridad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="claridad"
                            value={values.claridad}
                            name="claridad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">brevedad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="brevedad"
                            value={values.brevedad}
                            name="brevedad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">id_problema</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="id_problema"
                            value={values.id_problema}
                            name="brevedad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">objetivos</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="objetivos"
                            value={values.objetivos}
                            name="objetivos"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">importancia</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="importancia"
                            value={values.importancia}
                            name="importancia"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">limitaciones</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="limitaciones"
                            value={values.limitaciones}
                            name="limitaciones"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">seleccion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="seleccion"
                            value={values.seleccion}
                            name="seleccion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">uso</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="uso"
                            value={values.uso}
                            name="uso"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">precision</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="precision"
                            value={values.precision}
                            name="precision"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">cumplimientoobj</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="cumplimientoobj"
                            value={values.cumplimientoobj}
                            name="cumplimientoobj"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">aplicacion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="aplicacion"
                            value={values.aplicacion}
                            name="aplicacion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">alcance</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="alcance"
                            value={values.alcance}
                            name="alcance"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">profundidad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="profundidad"
                            value={values.profundidad}
                            name="profundidad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">validez</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="validez"
                            value={values.validez}
                            name="validez"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">recomendaciones</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="recomendaciones"
                            value={values.recomendaciones}
                            name="recomendaciones"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">bibliografia</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="bibliografia"
                            value={values.bibliografia}
                            name="bibliografia"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">tiempo</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="tiempo"
                            value={values.tiempo}
                            name="tiempo"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">contenido</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="contenido"
                            value={values.contenido}
                            name="contenido"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">demostracion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="demostracion"
                            value={values.demostracion}
                            name="demostracion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                                <MenuItem value = "7" key={i}> 7 </MenuItem>
                                <MenuItem value = "8" key={i}> 8 </MenuItem>
                                <MenuItem value = "9" key={i}> 9 </MenuItem>
                                <MenuItem value = "10" key={i}> 10 </MenuItem>
                                <MenuItem value = "11" key={i}> 11 </MenuItem>
                                <MenuItem value = "12" key={i}> 12 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">calidad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="calidad"
                            value={values.calidad}
                            name="calidad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">desenvolvimiento</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="desenvolvimiento"
                            value={values.desenvolvimiento}
                            name="desenvolvimiento"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">respuestas</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="respuestas"
                            value={values.respuestas}
                            name="respuestas"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                                <MenuItem value = "7" key={i}> 7 </MenuItem>
                                <MenuItem value = "8" key={i}> 8 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">calidad2</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="calidad2"
                            value={values.calidad2}
                            name="calidad2"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">desenvolvimiento2</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="desenvolvimiento2"
                            value={values.desenvolvimiento2}
                            name="desenvolvimiento2"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">respuestas2</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="respuestas2"
                            value={values.respuestas2}
                            name="respuestas2"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                                <MenuItem value = "6" key={i}> 6 </MenuItem>
                                <MenuItem value = "7" key={i}> 7 </MenuItem>
                                <MenuItem value = "8" key={i}> 8 </MenuItem>
                        </Select>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Pjurado"
                            name="pjurado"
                            variant="outlined"
                            value={values.pjurado}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Jurado2"
                            name="jurado"
                            variant="outlined"
                            value={values.jurado}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Tutor"
                            name="tutor"
                            variant="outlined"
                            value={values.tutor}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total 1 300"
                            name="total1300"
                            variant="outlined"
                            value={values.total1300}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total 1 20"
                            name="total120"
                            variant="outlined"
                            value={values.total120}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total 2 300"
                            name="total2300"
                            variant="outlined"
                            value={values.total2300}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total 2 300"
                            name="total2300"
                            variant="outlined"
                            value={values.total1200}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Mencion Honorifica"
                            name="mencionh"
                            variant="outlined"
                            value={values.mencionh}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Justificacion Mencion Honorifica"
                            name="justificacionmencionh"
                            variant="outlined"
                            value={values.justificacionmencionh}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Mencion Publicacion"
                            name="mencionp"
                            variant="outlined"
                            value={values.mencion}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Justificacion Mencion Publicacion"
                            name="justificacionmencionp"
                            variant="outlined"
                            value={values.justificacionmencionp}/>
                    
                    <Button type="submit" variant="contained" size="small" disableElevation>Completar</Button>
            </FormControl>
        </form>
    </div>
    )
}

export default AnexoExperimentalForm