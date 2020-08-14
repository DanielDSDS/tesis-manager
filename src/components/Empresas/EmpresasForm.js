import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React from 'react';
import useForm from '../useForm/useForm';

// nombre_emp

const Empresas = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'empresas'
    const { handleChange, handleSubmit, values } = useForm({ 
        'nombre_emp': '',
     }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-empresa">
                    <TextField
                            className="text-field"
                            size="small"
                            label="Nombre de Empresa"
                            name="nombre_emp"
                            variant="outlined"
                            value={values.cod_emp}
                            onChange={handleChange}
                    />      
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Empresa</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default Empresas;