import React from 'react'
import TutoresEmpForm from './TutoresEmpForm'
import TutoresEmpTable from './TutoresEmpTable'



const TutoresEmpresariales = () => {

return (   

    <div className="content-container">
         <h1 className="content-title">Tutores Empresariales</h1>
         <div className="form-container">
             <TutoresEmpForm />
        </div>
         <div className="table-container">
             <TutoresEmpTable />
        </div>
    </div>
)
}

export default TutoresEmpresariales