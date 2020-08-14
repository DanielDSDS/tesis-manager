import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import React, { useEffect, useState } from 'react';
import useForm from '../useForm/useForm';

// cod_tutor, cod_emp, nombre_tutor

const TutoresEmpForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const [empresas, setEmpresas] = useState([{}])
    const proxy = 'tutores_emp'
    const { handleChange, handleSubmit, values } = useForm({
        cod_tutor: '',
        cod_emp: '',
        nombre_tutor: ''
    }, proxy)

    useEffect(() => {
        fetchEmpresas();
    }, [])

    const fetchEmpresas = () => {
        fetch('http://localhost:3000/especialidades')
            .then(res => res.json())
            .then(result => setEmpresas(result))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-tutor_emp">
                    <FormControl>
                        <InputLabel id="empresas-label">Seleccionar Empresa</InputLabel>
                        <Select
                            labelId="empresas-label"
                            id="empresas"
                            value={values.cod_emp}
                            name="cod_emp"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                            {empresas.map((empresa, i) => (
                                <MenuItem value={empresa.cod_emp} key={i}>
                                    {empresa.nomb_emp}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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