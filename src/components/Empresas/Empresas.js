import React from 'react'
import EmpresasForm from './EmpresasForm'
import EmpresasTable from './EmpresasTable'

const Empresas = () => {

    return (

        <div className="content-container">
            <h1 className="content-title"> Empresas</h1>
            <div className="form-container">
                <EmpresasForm />
            </div>
            <div className="table-container">
                <EmpresasTable />
            </div>
        </div>
    )
}

export default Empresas