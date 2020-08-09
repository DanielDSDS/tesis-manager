import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import useForm from '../useForm/useForm'

// cedula_p, nombre_p, direccion_p, correo_p, telefono_p, tipo 
const ProfesoresForm = () => {
    const proxy = 'profesores'
    const { handleChange, handleSubmit, values } = useForm({
        cedula_p: '',
        nombre_p: '',
        direccion_p: '',
        correo_p: '',
        telefono_p: '',
        tipo: ''
    }, proxy)

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
                        <FormControlLabel value="F" control={<Radio />} label="Foraneo" />
                    </RadioGroup>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Profesor</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default ProfesoresForm