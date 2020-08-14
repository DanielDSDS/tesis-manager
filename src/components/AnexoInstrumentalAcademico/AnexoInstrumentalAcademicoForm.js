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

//id_tg, cedula_p, tema_propuesta, organizacion, criterio1, criterio2, criterio3, criterio4, criterio5, criterio6,decision_revisor, observaciones, fec_revision, iniciativa, 
//responsabilidad, adaptacion, hpcinstrucciones, hpphechos, aporteideas, observacionesemp, tetotal, taresresponsabilidad, tadocumento, presentacion, seleccion, justificacion, 
//metodologia, documentacion, precisionproducto, cumplimientoobj, recomendacionpt, definicion, profundidad, validez, recomendaciones, bibliografia, tiempo, contenido, calidad, 
//desenvolvimiento, demostracion, respuestase, jurado, total300, total20, mencionh, justificacionh


//Dios mio que horrible es esta tabla
const AnexoInstrumentalAcademicoForm = () => {
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
        iniciativa: '',
        responsabilidad: '',
        adaptacion: '',
        hpcinstrucciones: '',
        observacionesemp: '',
        tetotal: '',
        taresresponsabilidad: '',
        tadocumento: '',
        presentacion: '',
        seleccion: '',
        justificacion: '',
        metodologia: '',
        documentacion: '',
        precisionproducto: '',
        cumplimientoobj: '',
        recomendacionpt: '',
        definicion: '',
        profundidad: '',
        validez: '',
        recomendaciones: '',
        bibliografia: '',
        tiempo: '',
        contenido: '',
        calidad: '',
        desenvolvimiento: '',
        demostracion: '',
        respuestase: '',
        jurado: '',
        total300: '',
        total20: '',
        mencionh: '',
        justificacionh: '',
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
                    
                    <InputLabel id="jurado-label">iniciativa</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="iniciativa"
                            value={values.iniciativa}
                            name="iniciativa"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">responsabilidad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="responsabilidad"
                            value={values.responsabilidad}
                            name="responsabilidad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">adaptacion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="adaptacion"
                            value={values.adaptacion}
                            name="adaptacion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">hpcinstrucciones</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="hpcinstrucciones"
                            value={values.hpcinstrucciones}
                            name="hpcinstrucciones"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">hpcinstrucciones</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="hpcinstrucciones"
                            value={values.hpcinstrucciones}
                            name="hpcinstrucciones"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">hpphechos</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="hpphechos"
                            value={values.hpphechos}
                            name="hpphechos"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">aporteideas</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="aporteideas"
                            value={values.aporteideas}
                            name="aporteideas"
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
                        <TextField
                            className="text-field"
                            size="small"
                            label="observacionesemp"
                            name="observacionesemp"
                            variant="outlined"
                            value={values.observacionesemp}/>
                    <InputLabel id="jurado-label">tetotal</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="tetotal"
                            value={values.tetotal}
                            name="tetotal"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
                                <MenuItem value = "5" key={i}> 5 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">taresresponsabilidad</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="taresresponsabilidad"
                            value={values.taresresponsabilidad}
                            name="taresresponsabilidad"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">tadocumento</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="tadocumento"
                            value={values.tadocumento}
                            name="tadocumento"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">presentacion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="presentacion"
                            value={values.presentacion}
                            name="presentacion"
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
                        </Select>
                    <InputLabel id="jurado-label">justificacion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="justificacion"
                            value={values.justificacion}
                            name="justificacion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">metodologia</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="metodologia"
                            value={values.metodologia}
                            name="metodologia"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">documentacion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="documentacion"
                            value={values.documentacion}
                            name="documentacion"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                        </Select>
                    <InputLabel id="jurado-label">precisionproducto</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="precisionproducto"
                            value={values.precisionproducto}
                            name="precisionproducto"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                                <MenuItem value = "0" key={i}> 0 </MenuItem>
                                <MenuItem value = "1" key={i}> 1 </MenuItem>
                                <MenuItem value = "2" key={i}> 2 </MenuItem>
                                <MenuItem value = "3" key={i}> 3 </MenuItem>
                                <MenuItem value = "4" key={i}> 4 </MenuItem>
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
                        </Select>
                    <InputLabel id="jurado-label">recomendacionpt</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="recomendacionpt"
                            value={values.recomendacionpt}
                            name="recomendacionpt"
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
                        </Select>
                    <InputLabel id="jurado-label">definicion</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="definicion"
                            value={values.definicion}
                            name="definicion"
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
                    <InputLabel id="jurado-label">respuestase</InputLabel>
                        <Select
                            labelId="jurado-label"
                            id="respuestase"
                            value={values.respuestase}
                            name="respuestase"
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
                            label="jurado"
                            name="jurado"
                            variant="outlined"
                            value={values.jurado}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total  300"
                            name="total300"
                            variant="outlined"
                            value={values.total300}/>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Total  20"
                            name="total20"
                            variant="outlined"
                            value={values.total20}/>
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
                    
                    <Button type="submit" variant="contained" size="small" disableElevation>Completar</Button>
            </FormControl>
        </form>
    </div>
    )
}

export default AnexoInstrumentalAcademicoForm