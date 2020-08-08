import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
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
                        class="text-field"
                        size="small"
                        label="Nombre Especialidad"
                        name="nombre_esp"
                        variant="outlined"
                        value={values.nombre_esp}
                        onChange={handleChange}
                        disableElevation />
                    <Button class="button" variant="contained" type="submit">Añadir Especialidad</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default EspecialidadesForm;