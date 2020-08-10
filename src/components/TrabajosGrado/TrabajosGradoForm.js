import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import React from 'react';
import useForm from '../useForm/useForm';

import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'


// id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo

const TrabajosGradoForm = () => {
    //se define el nombre del endpoint que se va a utilizar para la llamada al POST
    const proxy = 'trabajos_grado'
    const { handleChange, handleSubmit, values } = useForm({ 
        'id_tg': '',
        'num_consejo': '',
        'cedula_t': '',
        'modalidad': '',
        'fec_aprobacion': '',
        'titulo': '',
     }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-trabajo_grado">
                    <TextField
                            className="text-field"
                            size="small"
                            label="Numero de Consejo"
                            name="num_consejo"
                            variant="outlined"
                            value={values.num_consejo}
                            onChange={handleChange}
                    />
                    <TextField
                            className="text-field"
                            size="small"
                            label="Cedula de Tesista"
                            name="cedula_t"
                            variant="outlined"
                            value={values.cedula_t}
                            onChange={handleChange}
                    />     
                     <TextField
                            className="text-field"
                            size="small"
                            label="Fecha de Aprobacion"
                            name="fec_aprobacion"
                            variant="outlined"
                            value={values.fec_aprobacion}
                            onChange={handleChange}
                    />   
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
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Tabajo de Grado</Button>
                </FormControl>
            </form>
        </div>
    )

}

export default TrabajosGradoForm;