import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import React from 'react';
import useForm from '../useForm/useForm';

const EspecialidadesForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'especialidades'
    const { handleChange, handleSubmit, values } = useForm({ 'codigo_esp': '', 'nombre_esp': '' }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-especialidad">
                    <TextField
                        name="nombre_esp"
                        label="Nombre Especialidad"
                        variant="outlined"
                        value={values.nombre_esp}
                        onChange={handleChange}
                    ></TextField>
                    <Button variant="contained" type="submit">Añadir Especialidad</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default EspecialidadesForm;