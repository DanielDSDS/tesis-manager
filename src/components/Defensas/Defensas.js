import React  from 'react';
import DefensasForm from './DefensasForm';
import DefensasTable from './DefensasTable';
const Defensas = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Defensas</h1>
            <div className="form-container">
                <DefensasForm />
            </div>
            <div className="table-container">
                <DefensasTable />
            </div>
        </div>
    )
}

export default Defensas