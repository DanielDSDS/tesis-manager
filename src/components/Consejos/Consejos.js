import React, { Component } from 'react';
import ConsejosForm from './ConsejosForm'
import ConsejosTable from './ConsejosTable'

const Consejos = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Instituciones</h1>
            <div className="form-container">
                <ConsejosForm />
            </div>
            <div className="table-container">
            <ConsejosTable />
            </div>
        </div>
    )
}

export default Consejos