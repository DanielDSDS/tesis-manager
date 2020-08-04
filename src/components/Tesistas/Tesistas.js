import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

const Tesistas = () => {
    return (
        <div>
            <form>
                <FormControl>
                    <TextField id="nombre" label="Nombre de Tesista" variant="outlined"></TextField>
                </FormControl>
                <FormControl>
                    <TextField id="cedula" label="Cedula" variant="outlined"></TextField>
                </FormControl>
                <FormControl>
                    <TextField id="correo_ucab" label="Correo UCAB" variant="outlined"></TextField>
                </FormControl>
                <FormControl>
                    <TextField id="correo_personal" label="Correo Personal" variant="outlined"></TextField>
                </FormControl>
                <Button variant="contained">Añadir tesista</Button>
            </form>
        </div>
    )
}

export default Tesistas