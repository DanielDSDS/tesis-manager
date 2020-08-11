import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

//cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t
const TesistasTable = () => {
    const [tesistas, setTesista] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Cedula', field: 'cedula_t', editable:'never' },
            { title: 'Nombre', field: 'nombre_t' },
            { title: 'email UCAB', field: 'correo_ucab_t' },
            { title: 'email', field: 'correo_particular_t' },
            { title: 'Telefono', field: 'telefono_contacto_t' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchTesistas()
    }, [])

    //obtener todas las especialidades
    const fetchTesistas = () => {
        fetch('http://tesis-manager.herokuapp.com/tesistas')
            .then(res => res.json())
            .then(result => setTesista(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una especialidad
    const deleteTesistas = (cedula_t) => {
        console.log(cedula_t)
        fetch(`http://tesis-manager.herokuapp.com/tesistas/${cedula_t}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar una especialidad
    const updateTesistas = (tesista) => {
        console.log(tesista)
        const { cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t } = tesista;
        const updateT = fetch(`http://tesis-manager.herokuapp.com/tesistas/${cedula_t}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateT)
    }


    return (
        <MaterialTable
            title="Tesistas"
            columns={state.columns}
            data={tesistas}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateTesistas(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteTesistas(oldData.cedula_t);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.cedula_t);
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

export default TesistasTable