import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import useForm from '../useForm/useForm';

//id_comite, fec_asignacion, fec_realizacion
const ComitesForm = () => {
    const proxy = 'comites'
    const { handleChange, handleSubmit, values } = useForm({
        id_comite: '',
        fec_realizacion: '',
    }, proxy)

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FormControl className="form-profesor">
                    <div className="form-tesista-1">
                        <TextField
                            className="text-field"
                            size="small"
                            label="Fecha Realizacion"
                            name="fec_realizacion"
                            variant="outlined"
                            value={values.fec_realizacion}
                            onChange={handleChange} />
                    </div>
                    <Button type="submit" variant="contained" size="small" disableElevation>Añadir Comite</Button>
                </FormControl>
            </form>
        </div>
    )
}

export default ComitesForm