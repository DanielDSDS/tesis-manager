import React from 'react'
import PropuestasForm from './PropuestasForm'
import PropuestasTable from './PropuestasTable'

const Propuestas = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Propuestas</h1>
            <div className="form-container">
                <PropuestasForm />
            </div>
            <div className="table-container">
                <PropuestasTable />
            </div>
        </div>
    )
}

export default Propuestas