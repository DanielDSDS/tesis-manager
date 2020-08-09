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

// cedula_p, nombre_p, direccion_p, correo_p, telefono_p, tipo 
const ProfesoresForm = () => {
    const [especialidades, setEspecialidades] = useState([{}])
    const [instituciones, setInstituciones] = useState([{}])
    const isToggled = false
    const proxy = 'profesores'
    const { handleChange, handleSubmit, values } = useForm({
        cedula_p: '',
        nombre_p: '',
        direccion_p: '',
        correo_p: '',
        telefono_p: '',
        tipo: '',
        cod_esp: '',
        cod_inst: '',
    }, proxy)

    const toggleSelect = () => (isToggled = !isToggled)

    const fetchEspecialidades = () => {
        fetch('http://localhost:3000/especialidades')
            .then(res => res.json())
            .then(result => setEspecialidades(result))
            .catch(err => console.log(err.message))
    }

    const fetchInstituciones = () => {
        fetch('http://localhost:3000/instituciones')
            .then(res => res.json())
            .then(result => setInstituciones(result))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchEspecialidades()
        fetchInstituciones()
    }, [])

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-profesor">
                    <div className="form-profesor-1">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Cedula"
                            name="cedula_p"
                            variant="outlined"
                            value={values.cedula_p}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Nombre"
                            name="nombre_p"
                            variant="outlined"
                            value={values.nombre_p}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Direccion"
                            name="direccion_p"
                            variant="outlined"
                            value={values.direccion_p}
                            onChange={handleChange} />
                    </div>
                    <TextField
                        className="text-field"
                        size="small"
                        label="Correo"
                        name="correo_p"
                        variant="outlined"
                        value={values.correo_p}
                        onChange={handleChange} />
                    <TextField
                        className="text-field"
                        size="small"
                        label="Telefono"
                        name="telefono_p"
                        variant="outlined"
                        value={values.telefono_p}
                        onChange={handleChange} />
                    <RadioGroup aria-label="tipo" name="tipo" value={values.tipo} onChange={handleChange}>
                        <FormControlLabel value="I" control={<Radio />} label="Interno" />
                        <FormControlLabel onClick={toggleSelect} value="F" control={<Radio />} label="Foraneo" />
                    </RadioGroup>
                    <FormControl>
                        <InputLabel id="especialidades-label">Especialidades</InputLabel>
                        <Select
                            labelId="especialidades-label"
                            id="especialidades"
                            value={values.cod_esp}
                            name="cod_esp"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                            {especialidades.map((especialidad, i) => (
                                <MenuItem value={especialidad.cod_esp} key={i}>
                                    {especialidad.nombre_esp}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    {isToggled ?
                        <div className="instituciones">
                            <InputLabel id="instituciones-label">Instituciones</InputLabel>
                            <Select
                                labelId="instituciones-label"
                                id="instituciones"
                                value=""
                                name="cod_inst"
                                onChange={handleChange}
                                onBlur={handleChange}
                            >
                                {instituciones.map((institucion, i) => (
                                    <MenuItem value={institucion.cod_inst} key={i}>
                                        {institucion.nombre_inst}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        : <div></div>
                    }
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Profesor</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default ProfesoresForm