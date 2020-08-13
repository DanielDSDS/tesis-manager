import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import useForm from '../useForm/useForm'

const Propuesta = ({ location }) => {
    //Se debe obtener desde el front: cedula_p,veredicto_profesor,id_comite,estatus_aprobacion,observaciones_comite
    const [triggers, setTrigger] = useState({ hasRevisor: false, hasComite: false })
    const [comites, setComites] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [propuesta, setPropuesta] = useState([{}])
    const { fec_entrega, id_propuesta, nombre_t, titulo_propuesta } = location.state.rowData
    const { handleChange, values } = useForm({
        cedula_p: '',
        veredicto_profesor: '',
        id_comite: '',
        observaciones_comite: '',
        estatus_aprobacion: '',
        fec_veredicto: '',
        fec_aprobacion: '',
    }, 'null')

    useEffect(() => {
        fetchPropuesta()
        fetchProfesores()
        fetchComites()
    }, [])

    useEffect(() => {
        checkTriggers()
    }, [setTrigger])

    const handleUpdate = () => {
        console.log("%cValores", "color:red", values)
        const { cedula_p, veredicto_profesor, id_comite, observaciones_comite, estatus_aprobacion, fec_veredicto, fec_aprobacion } = values;
        fetch(`http://localhost:3000/propuesta/${id_propuesta}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cedula_p, veredicto_profesor, id_comite, observaciones_comite, estatus_aprobacion, fec_veredicto, fec_aprobacion })
        })
    }

    const fetchPropuesta = () => {
        const _prop = fetch(`http://localhost:3000/propuestas/${id_propuesta}`)
            .then(res => res.json())
            .then(result => setPropuesta(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = () => {
        const _prof = fetch('http://localhost:3000/profesores')
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    const fetchComites = () => {
        const _coms = fetch('http://localhost:3000/comites')
            .then(res => res.json())
            .then(result => setComites(result))
            .catch(err => console.log(err.message))
    }

    const checkTriggers = () => {
        if (values.cedula_p !== 'NULL') {
            setTrigger({
                ...triggers,
                [triggers.hasRevisor]: true
            })
        }
        if (values.id_comite !== 'NULL') {
            setTrigger({
                ...triggers,
                [triggers.hasComite]: true
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { id_comite, cedula_p, observaciones_comite, estatus_aprobacion, veredicto_prof, fec_veredicto } = values;
        console.log(...propuesta, values);
    }

    return (
        <div className="content-container">
            <h2 className="content-title">Propuesta #{id_propuesta}</h2>
            <h4 className="content-subtitle">{titulo_propuesta} por: {nombre_t}</h4>
            <h5 className="content-subtitle">Fecha de entrega: {fec_entrega}</h5>
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
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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

        </div>
    )
}

export default Propuesta