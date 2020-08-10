import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

// titulo_propuesta, cedula_t, fec_entrega
const PropuestasTable = () => {
    const [propuestas, setPropuestas] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Titulo', field: 'titulo_propuesta', editable: 'never' },
            { title: 'Fecha de Entrega', field: 'fec_entrega' },
            { title: 'Tesista', field: 'cedula_t' },
        ],
        data: []
    })

    useEffect(() => {
        fetchPropuestas()
    }, [])

    //obtener todas las propuestas
    const fetchPropuestas = () => {
        fetch('http://localhost:3000/propuestasT')
            .then(res => res.json())
            .then(result => setPropuestas(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una propuesta
    const deletePropuesta = (id_propuesta) => {
        console.log(id_propuesta)
        fetch(`http://localhost:3000/propuestas/${id_propuesta}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar una especialidad
    const updatePropuesta = (propuesta) => {
        console.log(propuesta)
        const { id_comite, id_tg, estatus_aprobacion, titulo_propuesta,
            observaciones_comite, fec_comite, fec_veredicto, fec_aprovacion } = propuesta;
        const updateP = fetch(`http://localhost:3000/propuestas/${id_propuesta}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id_comite, id_tg, estatus_aprobacion, titulo_propuesta,
                observaciones_comite, fec_comite, fec_veredicto, fec_aprovacion
            })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateP)
    }


    return (
        <MaterialTable
            title="Propuestas"
            columns={state.columns}
            data={propuestas}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updatePropuesta(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deletePropuesta(oldData.id_propuesta);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.id_propuesta);
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

export default PropuestasTable
