import { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import React from 'react';

const ConsejosTable = () => {
    const [consejos, setConsejos] = useState([{}]);
    const [state, setState] = useState({
        columns: [
            { title: 'Numero de Consejo', field: 'num_consejo', editable: 'never' },
            { title: 'Fecha de Realizacion', field: 'fec_consejo' },
        ],
        data: []
    })

    useEffect(() => {
        fetchConsejos()
    }, [])

    const fetchConsejos = () => {
        fetch('http://tesis-manager.herokuapp.com/consejos')
            .then(res => res.json())
            .then(result => setConsejos(result))
            .catch(err => console.log(err.message))
    }

    const deleteConsejos = (num_consejos) => {
        console.log(num_consejos)
        fetch(`http://tesis-manager.herokuapp.com/consejos/${num_consejos}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    const updateConsejos = (consejos) => {
        console.log(consejos)
        const { num_consejo, fec_consejo } = consejos;
        const updateE = fetch(`http://tesis-manager.herokuapp.com/consejos/${num_consejo}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ num_consejo, fec_consejo })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateE)
    }

    return (
        <div>
            <MaterialTable
                title="Consejos"
                columns={state.columns}
                data={consejos}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        updateConsejos(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                        console.log(newData);
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            deleteConsejos(oldData.num_consejo);                    //AQUI SE DELETEA LA ESPECIALIDAD
                            console.log(oldData.num_consejo);
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

export default ConsejosTable