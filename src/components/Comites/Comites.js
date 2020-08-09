import React  from 'react';
import ComitesForm from './ComitesForm';
import ComitesTable from './ComitesTable';
const Comites = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Comites</h1>
            <div className="form-container">
                <ComitesForm />
            </div>
            <div className="table-container">
                <ComitesTable />
            </div>
        </div>
    )
}

export default Comites