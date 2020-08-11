import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React, { useState, useEffect } from 'react';
import useForm from '../useForm/useForm';

import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'


// id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo

const TrabajosGradoForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const [propuestas, setPropuestas] = useState([{}])
    const proxy = 'trabajos_grado'
    const { handleChange, handleSubmit, values } = useForm({
        'id_tg': '',
        'id_propuesta': '',
        'cedula_t': '',
        'modalidad': '',
        'fec_aprobacion': '',
        'titulo': '',
    }, proxy)

    useEffect(() => {
        fetchPropuestas()
    }, [])

    const fetchPropuestas = () => {
        fetch(`http://localhost:3000/propuestas`)
            .then(res => res.json())
            .then(result => setPropuestas(result))
            .catch(err => console.log(err.message))
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-trabajo_grado">
                    <div className="tg-form-1">
                        <FormControl>
                            <InputLabel id="propuestas-label">Propuesta Original</InputLabel>
                            <Select
                                labelId="propuestas-label"
                                id="propuestas"
                                value={values.id_propuesta}
                                name="id_propuesta"
                                onChange={handleChange}
                                onBlur={handleChange}
                            >
                                {propuestas.map((propuesta, i) => (
                                    <MenuItem value={propuesta.id_propuesta} key={i}>
                                        {propuesta.titulo_propuesta}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            className="text-field"
                            size="small"
                            label="Fecha de Aprobacion"
                            name="fec_aprobacion"
                            variant="outlined"
                            value={values.fec_aprobacion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="tg-form-2">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Titulo"
                            name="titulo"
                            variant="outlined"
                            value={values.titulo}
                            onChange={handleChange}
                        />
                        <RadioGroup aria-label="modalidad" name="modalidad" value={values.modalidad} onChange={handleChange}>
                            <FormControlLabel value="E" control={<Radio />} label="Experimental" />
                            <FormControlLabel value="I" control={<Radio />} label="Instrumental" />
                        </RadioGroup>
                    </div>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Tabajo de Grado</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default TrabajosGradoForm;