import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import useForm from '../useForm/useForm';

//titulo_propuesta, fec_entrega, cedula_t
const PropuestasForm = () => {
    const proxy = 'propuestas'
    const [tesistas, setTesistas] = useState([{}])
    const { handleChange, handleSubmit, values } = useForm({
        titulo_propuesta: '',
        fec_entrega: '',
        cedula_t: '',
    }, proxy)

    const fetchTesistas = () => {
        fetch('http://tesis-manager.herokuapp.com/tesistas')
            .then(res => res.json())
            .then(result => setTesistas(result))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchTesistas()
    }, [])

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-propuesta">
                    <div className="form-propuesta-1">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Titulo"
                            name="titulo_propuesta"
                            variant="outlined"
                            value={values.titulo_propuesta}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Fecha de Entrega"
                            name="fec_entrega"
                            variant="outlined"
                            value={values.fec_entrega}
                            onChange={handleChange} />
                    </div>
                    <FormControl>
                        <InputLabel id="tesistas-label">Tesista</InputLabel>
                        <Select
                            labelId="tesistas-label"
                            id="tesistas"
                            value={values.cedula_t}
                            name="cedula_t"
                            onChange={handleChange}
                            onBlur={handleChange}
                        >
                            {tesistas.map((tesista, i) => (
                                <MenuItem value={tesista.cedula_t} key={i}>
                                    {tesista.nombre_t}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Propuesta</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default PropuestasForm
