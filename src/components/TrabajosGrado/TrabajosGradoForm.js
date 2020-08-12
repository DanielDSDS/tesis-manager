import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from 'react';
import useForm from '../useForm/useForm';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'


// id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo

const TrabajosGradoForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const [propuestas, setPropuestas] = useState([{}])
    const [profesores, setProfesores] = useState([{}])
    const [empresas, setEmpresas] = useState([{}])
    const [toggle, setToggle] = useState(true)
    const proxy = 'trabajos_grado'
    const { handleChange, handleSubmit, values } = useForm({
        id_tg: '',
        id_propuesta: '',
        cedula_p: '',
        cod_emp: '',
        modalidad: '',
        titulo: '',
    }, proxy)


    useEffect(() => {
        fetchPropuestas()
        fetchProfesores()
    }, [])

    const toggleModalidad = ({ target }) => setToggle(target.value == "Experimental" ? true : false)

    const fetchPropuestas = () => {
        fetch(`http://localhost:3000/propuestas`)
            .then(res => res.json())
            .then(result => setPropuestas(result))
            .catch(err => console.log(err.message))
    }

    const fetchProfesores = () => {
        fetch(`http://localhost:3000/profesores`)
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    const fetchEmpresas = () => {
        fetch(`http://localhost:3000/empresas`)
            .then(res => res.json())
            .then(result => setEmpresas(result))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-trabajo_grado">
                    <div className="tg-form-1">
                        <FormControl className="select">
                            <InputLabel id="propuestas-label">Propuesta Original</InputLabel>
                            <Select
                                labelId="propuestas-label"
                                id="propuestas"
                                value={values.id_propuesta}
                                name="id_propuesta"
                                onChange={handleChange}
                                onBlur={handleChange}
                            >
                                {propuestas.map((propuesta, i) => (
                                    <MenuItem value={propuesta.id_propuesta} key={i}>
                                        {propuesta.titulo_propuesta}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Titulo"
                            name="titulo"
                            variant="outlined"
                            value={values.titulo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="tg-form-2">
                        <FormControl>
                            <RadioGroup aria-label="modalidad" name="modalidad" value={values.modalidad} onChange={handleChange}>
                                <FormControlLabel onClick={toggleModalidad} value="Experimental" control={<Radio />} label="Experimental" checked />
                                <FormControlLabel onClick={toggleModalidad} value="Instrumental" control={<Radio />} label="Instrumental" />
                            </RadioGroup>
                        </FormControl>
                        {toggle == true
                            ? <FormControl>
                                <InputLabel id="profesores-label">Profesores</InputLabel>
                                <Select
                                    className="select"
                                    labelId="profesores-label"
                                    id="profesores"
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
                            : <FormControl>
                                <InputLabel id="empresas-label">Empresas</InputLabel>
                                <Select
                                    className="select"
                                    labelId="empresas-label"
                                    id="empresas"
                                    value={values.cod_emp}
                                    name="cod_emp"
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                >
                                    {empresas.map((empresa, i) => (
                                        <MenuItem value={empresa.cod_emp} key={i}>
                                            {empresa.nombre_emp}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        }
                    </div>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Tabajo de Grado</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default TrabajosGradoForm;