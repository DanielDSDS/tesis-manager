import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
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
            .then(res => res.json())
            .then(result => setConsejos(result))
            .catch(err => console.log(err.message))
    }

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

export default TG
