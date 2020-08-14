import React from 'react';
import TrabajosGradoTable from './TrabajosGradoTable'
import TrabajosGradoForm from './TrabajosGradoForm'

const TrabajosGrado = () => {
    return (   

        <div className="content-container">
             <h1 className="content-title">Trabajos de Grado</h1>
             <div className="form-container">
                 <TrabajosGradoForm />
            </div>
             <div className="table-container">
                 <TrabajosGradoTable />
            </div>
        </div>
    )
}

export default TrabajosGrado