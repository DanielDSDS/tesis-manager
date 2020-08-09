import React from 'react';
import ProfesoresTable from './ProfesoresTable'
import ProfesoresForm from './ProfesoresForm'

const Profesores = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Profesores</h1>
            <div className="form-container">
                <ProfesoresForm />
            </div>
            <div className="table-container">
                <ProfesoresTable />
            </div>
        </div>
    )
}

export default Profesores;