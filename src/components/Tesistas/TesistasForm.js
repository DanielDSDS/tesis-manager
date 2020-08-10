import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import useForm from '../useForm/useForm';

//cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t
const TesistasForm = () => {
    const proxy = 'tesistas'
    const { handleChange, handleSubmit, values } = useForm({
        cedula_t: '',
        nombre_t: '',
        correo_ucab_t: '',
        correo_particular_t: '',
        telefono_contacto_t: ''
    }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-profesor">
                    <div className="form-tesista-1">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Cedula"
                            name="cedula_t"
                            variant="outlined"
                            value={values.cedula_t}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Nombre"
                            name="nombre_t"
                            variant="outlined"
                            value={values.nombre_t}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Telefono"
                            name="telefono_contacto_t"
                            value={values.telefono_contacto_t}
                            variant="outlined"
                            onChange={handleChange} />
                    </div>
                    <TextField
                        className="text-field"
                        size="small"
                        label="Correo"
                        name="correo_particular_t"
                        variant="outlined"
                        value={values.correo_particular_t}
                        onChange={handleChange} />
                    <TextField
                        className="text-field"
                        size="small"
                        variant="outlined"
                        label="Correo UCAB"
                        name="correo_ucab_t"
                        value={values.correo_ucab_t}
                        onChange={handleChange} />
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Tesista</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default TesistasForm