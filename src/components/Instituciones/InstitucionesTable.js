import { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import React from 'react';

const InstitucionesTable = () => {
    const [instituciones,setInstituciones] = useState([{}]);
    const [state,setState] = useState({
        columns: [
            { title: 'ID', field: 'cod_inst' },
            { title: 'Nombre de la Institucion', field: 'nombre_inst' },
        ],
        data: []
    })

    useEffect(() => {
        fetchInstituciones()
    }, [])

    const fetchInstituciones = () => {
        fetch('http://localhost:3000/instituciones')
            .then(res => res.json())
            .then(result => setInstituciones(result))
            .catch(err => console.log(err.message))
    }
    
    const deleteInstituciones = (cod_inst) => {
        console.log(cod_inst)
        fetch(`http://localhost:3000/instituciones/${cod_inst}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    const updateInstituciones = (instituciones) => {
        console.log(instituciones)
        const { cod_inst, nombre_inst } = instituciones;
        const updateE = fetch(`http://localhost:3000/instituciones/${cod_inst}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cod_inst, nombre_inst })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateE)
    }

    return(
        <div>
            <MaterialTable
            title="Instituciones"
            columns={state.columns}
            data={instituciones}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateInstituciones(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteInstituciones(oldData.cod_inst);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.cod_inst);
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
        </div>
    )
}

export default InstitucionesTable