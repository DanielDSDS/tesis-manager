import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React from 'react';
import useForm from '../useForm/useForm';

const ConsejosForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'consejos'
    const { handleChange, handleSubmit, values } = useForm({ 'num_consejo': '', 'fec_consejo': '' }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-consejos">
                    <TextField
                        className="text-field"
                        size="small"
                        label="Fecha de Realizacion"
                        name="fec_consejo"
                        variant="outlined"
                        value={values.fec_consejo}
                        onChange={handleChange}/>
                    <Button className="button" variant="contained" type="submit">Guardar</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default ConsejosForm;