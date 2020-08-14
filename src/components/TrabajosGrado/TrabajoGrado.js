import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
<<<<<<< HEAD
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import useForm from '../useForm/useForm';

const TG = ({ location }) => {
    const [consejos, setConsejos] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [TG, setTG] = useState([{}])
    const { id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo } = location.state

    const { handleChange, values } = useForm({
        num_consejo: '',
        titulo: '',
        cedula_p: '', //en tabla experimentales
    }, 'null')

    const hasConsejo = false
    const hasTutor = false
    //const hasVeredicto = false
    console.log(fecha)

    useEffect(() => {
        fetchTG()
        fetchProfesores()
        fetchConsejos()
    }, [])

    const fetchTG = async () => {
        const _prop = await fetch(`http://localhost:3000/trabajos_grado/${id_propuesta}`)
            .then(res => res.json())
            .then(result => setTG(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = async () => {
        const _prof = await fetch('http://localhost:3000/profesores')
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    const fetchConsejos = async () => {
        const _cons = await fetch('http://localhost:3000/consejos')
=======
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import useForm from '../useForm/useForm'

const TrabajoGrado = ({ location }) => {
    //Se debe obtener desde el front: num_consejo, modalidad, fec_aprobacion 
    const [consejos, setConsejos] = useState([{}])
    const [trabajogrado, setTrabajoGrado] = useState([{}])
    const { modalidad, titulo, id_tg /*num_consejo,fec_aprobacion,id_tg,*/ } = location.state.rowData
    const { handleChange, values } = useForm({
        num_consejo: '',
        modalidad: '',
        fec_aprobacion: '',
    }, 'null')

    useEffect(() => {
        fetchTrabajoGrado()
        fetchConsejos()
    }, [])

    const handleUpdate = () => {
        console.log("%cValores", "color:red", values)
        const { num_consejo, modalidad, fec_aprobacion } = values;
        fetch(`http://localhost:3000/trabajogrado/${id_tg}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ num_consejo, modalidad, fec_aprobacion })
        })
    }

    const fetchTrabajoGrado = () => {
        const _prop = fetch(`http://localhost:3000/trabajogrado/${id_tg}`)
            .then(res => res.json())
            .then(result => setTrabajoGrado(result))
            .catch(err => console.log(err.message))
    }

    const fetchConsejos = () => {
        const _prof = fetch('http://localhost:3000/consejos')
>>>>>>> 28d1830f71077dad3cd6bcf6bf8325025f13dae2
            .then(res => res.json())
            .then(result => setConsejos(result))
            .catch(err => console.log(err.message))
    }

<<<<<<< HEAD
    return (
        <div className="content-container">
            <h2 className="content-title">Trabajo de Grado #{id_tg}</h2>
            <h4 className="content-subtitle">{titulo}</h4>
            <div className="propuesta-container">
                <FormControl className="propuesta">
                    {hasConsejo
                        ? <h3>El trabajo de grado tiene un consejo asignado</h3>
                        : <FormControl className="comites-select-container">
                            <InputLabel id="consejos-label">Asignar Consejo</InputLabel>
                            <Select
                                labelId="consejos-label"
                                id="consejos"
                                value={values.num_consejo}
                                name="num_consejo"
                                onChange={handleChange}
                                onBlur={handleChange}
                            >
                                {consejos.map((consejo, i) => (
                                    <MenuItem value={consejo.num_consejo} key={i}>
                                        {consejo.fec_consejo}
                                    </MenuItem>
                                ))}
                            </Select>
                            <div>
                                
                            </div>
                        </FormControl>
                    }
                </FormControl>
                <FormControl className="propuesta">
                    {hasTutor
                        ? <h3>El trabajo de grado tiene un tutor asignado</h3>
                        : <FormControl className="revisor-select-container">
                            <InputLabel id="tutor-label">Asignar Tutor</InputLabel>
                            <Select
                                labelId="tutor-label"
                                id="tutores"
                                value={values.cedula_p}
                                name="cedula_p"
                                onChange={handleChange}
                                onBlur={handleChange}
                            >
                                {profesores.map((profesor, i) => (
                                    <MenuItem value={profesor.cedula_p} key={i}>
                                        {profesor.nombre_p}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    }
                    {/* {
                        hasVeredicto
                            ? <h3>El veredicto del profesor es {veredicto_prof}</h3>
                            : <FormControl className="veredicto-select-container">
                                <InputLabel id="veredicto-label">Veredicto del Revisor</InputLabel>
                                <Select
                                    labelId="revisor-label"
                                    id="revisores"
                                    value={values.cedula_p}
                                    name="cedula_p"
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                >
                                    {profesores.map((profesor, i) => (
                                        <MenuItem value={profesor.cedula_p} key={i}>
                                            {profesor.nombre_p}
=======
    const handleSubmit = e => {
        e.preventDefault()
        const { num_consejo, modalidad, fec_aprobacion } = values;
        console.log(...trabajogrado, values);
    }

    return (
        <div className="content-container">
            <h2 className="content-title">Trabajo de Grado #{id_tg}</h2>
            <h4 className="content-subtitle">{titulo} por: {/*nombre_t*/}</h4>
            <h5 className="content-subtitle">Fecha de entrega: {/*fec_entrega*/}</h5>
            <form onSubmit={handleSubmit}>
                <div className="propuesta-container">
                    <div className="propuesta-form-1">
                        {triggers.hasComite == true
                            ?
                            <div>
                                <TextField
                                    className="textarea-field"
                                    rowsMax={6}
                                    rows={6}
                                    size="small"
                                    label="Observaciones del Comite"
                                    name="observaciones_comite"
                                    variant="outlined"
                                    value={values.observaciones_comite}
                                    onChange={handleChange}
                                    multiline />
                                <FormControl className="aprobacion-select-container">
                                    <InputLabel id="aprobacion-label">Aprobacion Comite</InputLabel>
                                    <Select
                                        labelId="aprobacion-label"
                                        id="aprobacion"
                                        value={values.estatus_aprobacion}
                                        name="estatus_aprobacion"
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    >
                                        <MenuItem value="A" key={1}>A</MenuItem>
                                        <MenuItem value="R" key={2}>R</MenuItem>
                                        <MenuItem value="PE" key={3}>PE</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            :
                            <FormControl className="comites-select-container">
                                <InputLabel id="comites-label">Asignar Comite</InputLabel>
                                <Select
                                    labelId="comites-label"
                                    id="comites"
                                    value={values.id_comite}
                                    name="id_comite"
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                >
                                    {comites.map((comite, i) => (
                                        <MenuItem value={comite.id_comite} key={i}>
                                            {comite.fec_realizacion}
>>>>>>> 28d1830f71077dad3cd6bcf6bf8325025f13dae2
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
<<<<<<< HEAD
                    } */}

                </FormControl>
            </div>
=======
                        }
                    </div>
                    <div className="propuesta-form-2">
                        {triggers.hasComite == false
                            ? <div></div>
                            : <div>
                                <FormControl className="revisor-select-container w-15">
                                    <InputLabel id="revisor-label">Asignar Revisor</InputLabel>
                                    <Select
                                        className="w-15"
                                        labelId="revisor-label"
                                        id="revisores"
                                        value={values.cedula_p}
                                        name="cedula_p"
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    >
                                        {profesores.map((profesor, i) => (
                                            <MenuItem value={profesor.cedula_p} key={i}>
                                                {profesor.nombre_p}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        }
                        {
                            triggers.hasRevisor == true
                                ? <h3>El veredicto del profesor es {veredicto_prof}</h3>
                                : <FormControl className="veredicto-container w-15">
                                    <InputLabel id="veredicto-label">Veredicto del Revisor</InputLabel>
                                    <Select
                                        className="w-15"
                                        labelId="veredicto-label"
                                        id="veredictos"
                                        value={values.veredicto_profesor}
                                        name="veredicto_prof"
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    >
                                        <MenuItem value="A" key={1}>A</MenuItem>
                                        <MenuItem value="R" key={2}>R</MenuItem>
                                        <MenuItem value="PE" key={3}>PE</MenuItem>
                                    </Select>
                                </FormControl>
                        }
                    </div>
                </div>
                <Button type="submit" variant="contained" size="small" disableElevation>Actualizar Propuesta</Button>
            </form>

>>>>>>> 28d1830f71077dad3cd6bcf6bf8325025f13dae2
        </div>
    )
}

<<<<<<< HEAD
export default TG
=======
export default TrabajoGrado
>>>>>>> 28d1830f71077dad3cd6bcf6bf8325025f13dae2
