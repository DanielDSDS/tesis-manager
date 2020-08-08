import React from 'react';

const Profesores = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Tesistas</h1>
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