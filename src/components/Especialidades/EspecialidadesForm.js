import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button';
import React from 'react';
import useForm from '../useForm/useForm';

const EspecialidadesForm = () => {
    const { handleChange, handleSubmit, especialidades } = useForm({ 'codigo_esp': '', 'nombre_esp': '' })

    return (
        <div className="form-container">
        </div>
    )

}

export default EspecialidadesForm;