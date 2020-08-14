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
    const [hasComite, setComite] = useState(false)
    const [hasRevisor, setRevisor] = useState(false)

    const [comites, setComites] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [propuesta, setPropuesta] = useState([{}])
    const { fec_entrega, id_propuesta, nombre_t, titulo_propuesta } = location.state.rowData
    const { handleChange, values } = useForm({
        cedula_p: '',
        veredicto_profesor: '',
        id_comite: '',
        observaciones_comite: propuesta.observaciones_comite,
        estatus_aprobacion: propuesta.estatus_aprobacion,
        // fec_veredicto: '',
        // fec_aprobacion: '',
    }, 'null')

    useEffect(() => {
        fetchPropuesta()
        fetchProfesores()
        fetchComites()
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log("%cValores", "color:red", values)
        const { cedula_p, veredicto_profesor, id_comite, observaciones_comite, estatus_aprobacion, } = values;
        let fec_veredicto = ''
        let fec_aprobacion = ''
        let fec_comite = ''
        if (veredicto_profesor != 'PE' || veredicto_profesor !== false) {
            fec_veredicto = getLocalDate()
        }
        if (estatus_aprobacion != 'NR' || estatus_aprobacion !== false) {
            fec_aprobacion = getLocalDate()
        }
        if (id_comite != '') {
            fec_comite = getLocalDate()
        }

        fetch(`http://localhost:3000/propuesta/${id_propuesta}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cedula_p, veredicto_profesor, fec_comite, id_comite, observaciones_comite, estatus_aprobacion, fec_veredicto, fec_aprobacion })
        })
    }

    const fetchPropuesta = () => {
        const _prop = fetch(`http://localhost:3000/propuestas/${id_propuesta}`)
            .then(res => res.json())
            .then(result => setPropuesta(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = () => {
        const _prof = fetch('http://localhost:3000/profesores/internos')
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

    function getLocalDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;
        return today;
    }

    const stateHandler = (e) => {
        handleChange(e)
        const { target } = e;
        if (target.name = 'id_comite') {
            if (values.id_comite !== '') {
                setComite(true)
            }
        }
        if (target.name = 'cedula_p') {
            if (values.cedula_p !== '') {
                setRevisor(true)
            }
        }
        console.log('%ctoggled')
    }

    return (
        <div className="content-container">
            <h2 className="content-title">Propuesta #{id_propuesta}</h2>
            <h4 className="content-subtitle">{titulo_propuesta} por: {nombre_t}</h4>
            <h5 className="content-subtitle">Fecha de entrega: {fec_entrega}</h5>
            <div className="display-data">
                <div className="display-message-1">
                    {propuesta.id_comite
                        ? <h5>Fecha del comite:{propuesta.fec_comite}</h5>
                        : <h5>No ha sido asignada a un comite</h5>
                    }
                    {propuesta.estatus_aprobacion == 'NR'
                        ? < h5 > Esta propuesta no ha sido revisada por el comite</h5>
                        : < h5 > Estado de aprobacion del comite:{propuesta.estatus_aprobacion}</h5>
                    }
                    {propuesta.observaciones_comite
                        ? <h5>Observaciones del comite:{propuesta.observaciones_comite}</h5>
                        : <span></span>
                    }
                </div>
                <div className="display-message-1">
                    {propuesta.cedula_p
                        ? <div>< h5 > Profesor revisor asignado: C.I V-{propuesta.cedula_p}</h5>
                            <h5>Estado de aprobacion del revisor:{propuesta.veredicto_profesor}</h5></div>
                        : <h5>No tiene ningun profesor revisor asignado</h5>
                    }

                </div>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="propuesta-container">
                    <div className="propuesta-form-1">
                        <FormControl className="comites-select-container">
                            <InputLabel id="comites-label">Asignar Comite</InputLabel>
                            <Select
                                className="w-15"
                                labelId="comites-label"
                                id="comites"
                                value={values.id_comite}
                                name="id_comite"
                                onChange={stateHandler}
                                onBlur={stateHandler}
                            >
                                {comites.map((comite, i) => (
                                    <MenuItem value={comite.id_comite} key={i}>
                                        {comite.fec_realizacion}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className="aprobacion-select-container">
                            <InputLabel id="aprobacion-label">Aprobacion Comite</InputLabel>
                            <Select
                                className="w-15"
                                labelId="aprobacion-label"
                                id="aprobacion"
                                value={values.estatus_aprobacion}
                                name="estatus_aprobacion"
                                onChange={handleChange}
                                onBlur={handleChange}
                                disabled={!hasComite}
                            >
                                <MenuItem value="PAR" key={1}>PAR</MenuItem>
                                <MenuItem value="PRR" key={2}>PRR</MenuItem>
                                <MenuItem value="NR" key={3}>NR</MenuItem>
                            </Select>
                        </FormControl>
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
                            disabled={!hasComite}
                            multiline />

                    </div>
                    <div className="propuesta-form-2">
                        <FormControl className="revisor-select-container w-15">
                            <InputLabel id="revisor-label">Asignar Revisor</InputLabel>
                            <Select
                                className="w-15"
                                labelId="revisor-label"
                                id="revisores"
                                value={values.cedula_p}
                                name="cedula_p"
                                onChange={stateHandler}
                                onBlur={stateHandler}
                            >
                                {profesores.map((profesor, i) =>
                                    (<MenuItem value={profesor.cedula_p} key={i}>
                                        {profesor.nombre_p}
                                    </MenuItem>)
                                )}
                            </Select>
                        </FormControl>
                        <FormControl className="veredicto-container w-15">
                            <InputLabel id="veredicto-label">Veredicto del Revisor</InputLabel>
                            <Select
                                className="w-15"
                                labelId="veredicto-label"
                                id="veredictos"
                                value={values.veredicto_profesor}
                                name="veredicto_profesor"
                                onChange={handleChange}
                                onBlur={handleChange}
                                disabled={!hasRevisor}
                            >
                                <MenuItem value="A" key={1}>A</MenuItem>
                                <MenuItem value="R" key={2}>R</MenuItem>
                                <MenuItem value="PE" key={3}>PE</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Button type="submit" variant="contained" size="small" disableElevation>Actualizar Propuesta</Button>
            </form>

        </div >
    )
}

export default Propuesta