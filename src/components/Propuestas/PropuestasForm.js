import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import useForm from '../useForm/useForm';

//fec_pres, cedula_t, hora_pres
const DefensasForm = () => {
    const proxy = 'defensas'
    const { handleChange, handleSubmit, values } = useForm({
        fec_pres: '',
        cedula_t: '',
        hora_pres: '',
    }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-profesor">
                    <div className="form-tesista-1">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Cedula"
                            name="cedula_t"
                            variant="outlined"
                            value={values.cedula_t}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Fecha Presentacion"
                            name="fec_pres"
                            variant="outlined"
                            value={values.fec_pres}
                            onChange={handleChange} />
                        <TextField
                            className="text-field"
                            size="small"
                            label="Hora Presentacion"
                            name="hora_pres"
                            variant="outlined"
                            value={values.hora_pres}
                            onChange={handleChange} />
                    </div>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Defensa</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default DefensasForm