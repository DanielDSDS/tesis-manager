import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

// nombre_emp
const EmpresasTable = () => {
    const [empresas, setEmpresas] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Nombre de Empresa', field: 'nombre_emp', editable: 'never' },
           
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchEmpresas()
    }, [])

    //obtener todas las empresas
    const fetchEmpresas = () => {
        fetch('http://localhost:3000/empresas')
            .then(res => res.json())
            .then(result => setEmpresas(result))
            .catch(err => console.log(err.message))
    }

    //eliminar un tutor
    const deleteEmpresas = (nombre_emp) => {
        console.log(cod_tutor)
        fetch(`http://localhost:3000/empresas/${nombre_emp}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar un tutor
    const updateEmpresas = (empresa) => {
        console.log(empresa)
        const { nombre_emp } = empresa;
        const updateEmp = fetch(`http://localhost:3000/empresa/${nombre_emp}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ nombre_emp })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateEmp)
    }


    return (
        <MaterialTable
            title="Empresas"
            columns={state.columns}
            data={empresas}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateEmpresas(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteEmpresas(oldData.nombre_emp);                    //AQUI SE DELETEA 
                        console.log(oldData.nombre_emp);
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    )
}

export default EmpresasTable