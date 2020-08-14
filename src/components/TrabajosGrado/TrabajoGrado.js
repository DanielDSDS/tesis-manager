import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import useForm from '../useForm/useForm';

const TrabajoGrado = ({ location }) => {

    const [hasTutor, setTutor] = useState(false)
    const [hasConsejo, setConsejo] = useState(false)
    const [consejos, setConsejos] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [trabajogrado, setTG] = useState([{}])
    const { id_tg, id_propuesta, modalidad, /*fec_aprobacion,num_consejo,*/ titulo } = location.state

    const { handleChange, values } = useForm({
        num_consejo: '',
        titulo: '',
        cedula_p1: '',
        cedula_p2: '',
        cedula_p3: '',
        fec_aprobacion: '',
    }, 'null')

    useEffect(() => {
        fetchTG()
        fetchProfesores()
        fetchConsejos()
    }, [])

    const fetchTG = () => {
        const _prop = fetch(`http://localhost:3000/trabajos_grado/${id_propuesta}`)
            .then(res => res.json())
            .then(result => setTG(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = () => {
        const _prof = fetch('http://localhost:3000/profesores')
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    const fetchConsejos = () => {
        const _cons = fetch('http://localhost:3000/consejos')
            .then(res => res.json())
            .then(result => setConsejos(result))
            .catch(err => console.log(err.message))
    }


    const stateHandler = (e) => {
        handleChange(e)
        const { target } = e;
        if (target.name = 'num_consejo') {
            if (values.num_consejo !== '') {
                setConsejo(true)
            }
        }
        if (target.name = 'cedula_p') {
            if (values.cedula_p !== '') {
                setTutor(true)
            }
        }
    }

    return (
        <div className="content-container">
            <h2 className="content-title">Trabajo de Grado #{id_tg}</h2>
            <h4 className="content-subtitle">{titulo}</h4>
            <div className="propuesta-container">
                <FormControl className="propuesta-1">
                    <div className="display-data">
                        <div className="display-message-1">
                            {trabajogrado.num_consejo
                                ? <h5>Fecha del comite:{propuesta.fec_comite}</h5>
                                : <h5>No ha sido asignado a un consejo</h5>
                            }
                            {trabajogrado.fec_aprobacion
                                ? < h5 > Fecha de aprobacion: {trabajogrado.fec_aprobacion}</h5>
                                : < h5 > Este trabajo de grado no ha sido aprobado</h5>
                            }
                        </div>
                        <div className="display-message-1">
                            {trabajogrado.cedula_p
                                ? <div>< h5 > Profesor revisor asignado: C.I V-{propuesta.cedula_p}</h5>
                                    <h5>Estado de aprobacion del revisor:{propuesta.veredicto_profesor}</h5></div>
                                : <h5>No tiene ningun profesor revisor asignado</h5>
                            }

                        </div>
                    </div>
                    <FormControl className="comites-select-container">
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
                    </FormControl>
                    <TextField
                        id="date"
                        label="Fecha de aprobacion"
                        type="date"
                        defaultValue=""
                        value={values.fec_aprobacion}
                        className="w-15"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                </FormControl>
                <FormControl className="propuesta-2">
                    <FormControl className="revisor-select-container">
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
                    <h3 className="select-jurado-title">Asignar un Jurado</h3>
                    <div className="select-jurado-container">
                        <FormControl className="jurado-select-1">
                            <InputLabel id="juez-label">Juez 1</InputLabel>
                            <Select
                                labelId="juez-label"
                                id="jueces"
                                value={values.cedula_p1}
                                name="cedula_p1"
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
                        <FormControl className="jurado-select-2">
                            <InputLabel id="juez-label">Juez 1</InputLabel>
                            <Select
                                labelId="juez-label"
                                id="jueces"
                                value={values.cedula_p2}
                                name="cedula_p2"
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
                        <FormControl className="jurado-select-3">
                            <InputLabel id="juez-label">Juez 1</InputLabel>
                            <Select
                                labelId="juez-label"
                                id="jueces"
                                value={values.cedula_p3}
                                name="cedula_p3"
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
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                    } */}

                </FormControl>
            </div>
        </div>
    )
}

export default TrabajoGrado
