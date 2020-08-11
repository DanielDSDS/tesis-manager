import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

// cedula_p, nombre_p, direccion_p, correo_p, telefono_p 
const ProfesoresTable = () => {
    const [profesores, setProfesores] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Cedula', field: 'cedula_p', editable: 'never' },
            { title: 'Nombre', field: 'nombre_p' },
            { title: 'Direccion', field: 'direccion_p' },
            { title: 'Correo', field: 'correo_p' },
            { title: 'Telefono', field: 'telefono_p' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchProfesores()
    }, [])

    //obtener todas las especialidades
    const fetchProfesores = () => {
        fetch('http://localhost:3000/profesores')
            .then(res => res.json())
            .then(result => setProfesores(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una especialidad
    const deleteProfesores = (cedula_p) => {
        console.log(cedula_p)
        fetch(`http://localhost:3000/profesores/${cedula_p}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar una especialidad
    const updateProfesores = (profesor) => {
        console.log(profesor)
        const { cedula_p, nombre_p, direccion_p, correo_p, telefono_p } = profesor;
        const updateP = fetch(`http://localhost:3000/profesores/${cedula_p}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cedula_p, nombre_p, direccion_p, correo_p, telefono_p })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateP)
    }


    return (
        <MaterialTable
            title="Profesores"
            columns={state.columns}
            data={profesores}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateProfesores(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteProfesores(oldData.cedula_p);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.cedula_p);
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

export default ProfesoresTable