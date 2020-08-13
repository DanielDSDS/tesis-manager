import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import useForm from '../useForm/useForm'

const Propuesta = ({ location }) => {
    console.log(location)
    const [comites, setComites] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [propuesta, setPropuesta] = useState([{}])
    const { fec_entrega, id_propuesta, nombre_t, titulo_propuesta } = location.state.rowData

    const { handleChange, values } = useForm({
        id_comite: '',
        cedula_p: '',
        observaciones_comite: '',
        estatus_aprobacion: '',
        veredicto_prof: '',
        fec_veredicto: '',
    }, 'null')

    const hasComite = false
    const hasRevisor = false
    const hasVeredicto = false

    useEffect(() => {
        fetchPropuesta()
        fetchProfesores()
        fetchComites()
    }, [])

    const handleUpdate = () => {
        const { id_comite, cedula_p, observaciones_comite, estatus_aprobacion, veredicto_prof, fec_veredicto } = values
        const { id_propuesta, veredicto_profesor, titulo_propuesta, fec_comite, fec_entrega, fec_aprobacion } = propuesta
        fetch(`http://localhost:3000/propuesta/${id_propuesta}`, {
            method: 'UPDATE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id_comite, cedula_p, observaciones_comite, estatus_aprobacion, veredicto_prof, fec_veredicto, id_propuesta, veredicto_profesor, titulo_propuesta, fec_comite, fec_entrega, fec_aprobacion })
        })
    }

    const fetchPropuesta = () => {
        const _prop = fetch(`http://localhost:3000/propuestas/${id_propuesta}`)
            .then(res => res.json())
            .then(result => setPropuesta(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = () => {
        const _prof = fetch('http://tesis-manager.herokuapp.com/profesores')
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    const fetchComites = () => {
        const _coms = fetch('http://tesis-manager.herokuapp.com/comites')
            .then(res => res.json())
            .then(result => setComites(result))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="content-container">
            <h2 className="content-title">Propuesta #{id_propuesta}</h2>
            <h4 className="content-subtitle">{titulo_propuesta} por: {nombre_t}</h4>
            <h5 className="content-subtitle">Fecha de entrega: {fec_entrega}</h5>
            <form onSubmit={handleUpdate}>
                <div className="propuesta-container">
                    <div className="propuesta-select">
                        {hasComite == true
                            ? <h3>La propuesta tiene un comite asignado</h3>
                            : <FormControl className="comites-select-container">
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
                                        </MenuItem>
                                    ))}
                                </Select>
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
                                </div>
                            </FormControl>
                        }
                    </div>
                    <div className="propuesta-veredicto">
                        {hasRevisor == true
                            ? <h3>La propuesta tiene un comite asignado</h3>
                            : <FormControl className="revisor-select-container">
                                <InputLabel id="revisor-label">Asignar Revisor</InputLabel>
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
                        }
                        {
                            hasVeredicto
                                ? <h3>El veredicto del profesor es {veredicto_prof}</h3>
                                : <FormControl className="veredicto-container">
                                    <InputLabel id="veredicto-label">Veredicto del Revisor</InputLabel>
                                    <Select
                                        labelId="veredicto-label"
                                        id="veredictos"
                                        value={values.veredicto_prof}
                                        name="veredicto_prof"
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                    >
                                        <MenuItem value="PAR" key={1}>PAR</MenuItem>
                                        <MenuItem value="PRR" key={2}>PRR</MenuItem>
                                        <MenuItem value="NA" key={3}>NA</MenuItem>
                                    </Select>
                                </FormControl>
                        }
                    </div>
                </div>
                <Button type="submit" variant="contained" size="small" disableElevation>Actualizar Propuesta</Button>
            </form>

        </div>
    )
}

export default Propuesta