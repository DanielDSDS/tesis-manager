import React from 'react';

const Propuestas = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Propuestas</h1>
            <div className="form-container">
                <DefensasForm />
            </div>
            <div className="table-container">
                <DefensasTable />
            </div>
        </div>
    )
}

export default Propuestas