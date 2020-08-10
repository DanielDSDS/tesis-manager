import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React from 'react';
import useForm from '../useForm/useForm';

// cod_tutor, cod_emp, nombre_tutor

const TutoresEmpForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'tutores_emp'
    const { handleChange, handleSubmit, values } = useForm({ 
        'cod_tutor': '',
        'cod_emp': '',
        'nombre_tutor': ''
     }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-tutor_emp">
                    <TextField
                            className="text-field"
                            size="small"
                            label="Codigo de Empresa"
                            name="cod_emp"
                            variant="outlined"
                            value={values.cod_emp}
                            onChange={handleChange}
                    />
                    <TextField
                            className="text-field"
                            size="small"
                            label="Nombre de Tutores"
                            name="nombre_tutor"
                            variant="outlined"
                            value={values.nombre_tutor}
                            onChange={handleChange}
                    />        
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Tutor Empresarial</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default TutoresEmpForm;