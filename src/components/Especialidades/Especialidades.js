import React from 'react'
import EspecialidadesTable from './EspecialidadesTable'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Especialidades = () => {


    return(
        <div className="especialidades-container">   
            <div className="form-container"> 
                <h3>Aqui ira la forma para introducir especialidades</h3>
            </div>
            <div className="table-container">
                <EspecialidadesTable/>
            </div>
        </div>
    )
}

export default Especialidades