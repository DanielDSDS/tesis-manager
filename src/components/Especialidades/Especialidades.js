import React from 'react'
import EspecialidadesTable from './EspecialidadesTable'
import EspecialidadesForm from './EspecialidadesForm'

const Especialidades = () => {

    return (
        <div className="content-container">
            <h1 className="content-title">Especialidades</h1>
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