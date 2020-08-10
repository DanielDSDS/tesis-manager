import React from 'react';
import InstitucionesForm from './InstitucionesForm'
import InstitucionesTable from './InstitucionesTable'

const Instituciones = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Instituciones</h1>
            <div className="form-container">
                <InstitucionesForm />
            </div>
            <div className="table-container">
                <InstitucionesTable />
            </div>
        </div>
    )
}

export default Instituciones