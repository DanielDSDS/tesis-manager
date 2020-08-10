import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React from 'react';
import useForm from '../useForm/useForm';

const InstitucionesForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'instituciones'
    const { handleChange, handleSubmit, values } = useForm({ 'codigo_inst': '', 'nombre_inst': '' }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-institucion">
                    <TextField
                        className="text-field"
                        size="small"
                        label="Nombre Institucion"
                        name="nombre_inst"
                        variant="outlined"
                        value={values.nombre_inst}
                        onChange={handleChange}/>
                    <Button className="button" variant="contained" type="submit">Añadir Institucion</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default InstitucionesForm;