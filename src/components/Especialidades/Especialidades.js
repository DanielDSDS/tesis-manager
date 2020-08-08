import React from 'react'
import EspecialidadesTable from './EspecialidadesTable'

const Especialidades = () => {

    return(
        <div className="content-container">   
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