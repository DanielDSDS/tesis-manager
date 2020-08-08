import React from 'react';
import TesistasForm from './TesistasForm';
import TesistasTable from './TesistasTable';

const Tesistas = () => {
    return (
        <div className="content-container">
            <h1 className="content-title">Tesistas</h1>
            <div className="form-container">
                <TesistasForm />
            </div>
            <div className="table-container">
                <TesistasTable />
            </div>
        </div>
    )
}

export default Tesistas