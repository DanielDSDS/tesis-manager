import React from 'react'
import EspecialidadesTable from './EspecialidadesTable'
import EspecialidadesForm from './EspecialidadesForm'

const Especialidades = () => {

    return (
        <div className="content-container">
            <div className="form-container">
                <EspecialidadesForm />
            </div>
            <div className="table-container">
                <EspecialidadesTable />
            </div>
        </div>
    )
}

export default Especialidades