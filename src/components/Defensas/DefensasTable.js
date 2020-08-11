import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

//fec_presentacion, cedula_t, hora_pres
const DefensasTable = () => {
    const [defensas, setDefensa] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Cedula', field: 'cedula_t', editable:'never' },
            { title: 'Fecha Presentacion', field: 'fec_pres' },
            { title: 'Hora Presentacion', field: 'hora_pres' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchDefensas()
    }, [])

    //obtener todas las especialidades
    const fetchDefensas = () => {
        fetch('http://localhost:3000/defensas')
            .then(res => res.json())
            .then(result => setDefensa(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una especialidad
    const deleteDefensas = (cedula_t) => {
        console.log(cedula_t)
        fetch(`http://localhost:3000/defensas/${cedula_t}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar una especialidad
    const updateDefensas = (defensa) => {
        console.log(defensa)
        const { fec_pres, cedula_t, hora_pres } = defensa;
        const updateD = fetch(`http://localhost:3000/defensas/${cedula_t}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ fec_pres, cedula_t, hora_pres })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateD)
    }


    return (
        <MaterialTable
            title="Defensas"
            columns={state.columns}
            data={defensas}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateDefensas(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteDefensas(oldData.cedula_t);                    //AQUI SE DELETEA LA ESPECIALIDAD
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

export default DefensasTable