import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

// id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo
const TrabajosGradoTable = () => {
    const [trabajosgrado, setTrbajosgrados] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Id trabajo grado', field: 'id_tg', editable: 'never' },
            { title: 'Numero de consejo', field: 'num_consejo' },
            { title: 'Cedula tesista', field: 'cedula_t' },
            { title: 'Modalidad', field: 'modalidad' },
            { title: 'Fecha aprobacion', field: 'fec_aprobacion' },
            { title: 'Ttulo', field: 'titulo' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchTrabajosgrado()
    }, [])

    //obtener todos los tutores emp
    const fetchTrabajosgrado = () => {
        fetch('http://localhost:3000/trabajos_grado')
            .then(res => res.json())
            .then(result => setTrabajosGrado(result))
            .catch(err => console.log(err.message))
    }

    //eliminar un tutor
    const deleteTrabajosgrado = (id_tg) => {
        console.log(id_tg)
        fetch(`http://localhost:3000/trabajos_grado/${id_tg}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar un tutor
    const updateTrabajogrado = (trabajosgrado) => {
        console.log(trabajosgrado)
        const { id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo } = trabajosgrado;
        const updateTg = fetch(`http://localhost:3000/trabajos_grado/${id_tg}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id_tg, num_consejo, cedula_t, modalidad, fec_aprobacion, titulo })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateTg)
    }


    return (
        <MaterialTable
            title="Trabajos de Grado"
            columns={state.columns}
            data={trabajosgrado}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateTrabajogrado(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteTrabajosgrado(oldData.cod_tutor);                    //AQUI SE DELETEA el tg 
                        console.log(oldData.id_tg);
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

export default TrabajosGradoTable