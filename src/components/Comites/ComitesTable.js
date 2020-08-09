import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

//id_comite, fec_asignacion, fec_realizacion
const ComitesTable = () => {
    const [comites, setComite] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'ID', field: 'id_comite' },
            { title: 'Fecha Asignacion', field: 'fec_asignacion' },
            { title: 'Fecha Realizacion', field: 'fec_realizacion' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchComites()
    }, [])

    //obtener todas las especialidades
    const fetchComites = () => {
        fetch('http://localhost:3000/comites')
            .then(res => res.json())
            .then(result => setComite(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una especialidad
    const deleteComite = (id_comite) => {
        console.log(id_comite)
        fetch(`http://localhost:3000/comites/${id_comite}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }
    //actualizar una especialidad
    const updateComites = (comite) => {
        console.log(comite)
        const { id_comite, fec_asignacion, fec_realizacion } = comite;
        const updateC = fetch(`http://localhost:3000/comites/${id_comite}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id_comite, fec_asignacion, fec_realizacion })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateC)
    }


    return (
        <MaterialTable
            title="Comites"
            columns={state.columns}
            data={comites}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateComites(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteComite(oldData.id_comite);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.id_comite);
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

export default ComitesTable