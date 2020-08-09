import React from 'react'
import TutoresEmpTable from './TutoresEmpTable'
import TutoresEmpForm from './TutoresEmpForm'

const TutoresEmp = () => {

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

export default TutoresEmp