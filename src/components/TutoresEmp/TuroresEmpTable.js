import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

// cod_tutor, cod_emp, nombre_tutor
const TutoresEmpTable = () => {
    const [tutoresemp, setTutoresemp] = useState([{}])
    const [state, setState] = useState({
        columns: [
            { title: 'Codigo tutor', field: 'cod_tutor', editable: 'never' },
            { title: 'Codigo empresa', field: 'cod_emp' },
            { title: 'Nombre tutor', field: 'nombre_tutor' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchTutoresemp()
    }, [])

    //obtener todos los tutores emp
    const fetchTutoresemp = () => {
        fetch('http://localhost:3000/tutore_semp')
            .then(res => res.json())
            .then(result => setTutoresemp(result))
            .catch(err => console.log(err.message))
    }

    //eliminar un tutor
    const deleteTutoresemp = (cod_tutor) => {
        console.log(cod_tutor)
        fetch(`http://localhost:3000/tutores_emp/${cod_tutor}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar un tutor
    const updateTutoresemp = (tutoremp) => {
        console.log(tutoremp)
        const { cod_tutor, cod_emp, nombre_tutor } = tutoremp;
        const updateTe = fetch(`http://localhost:3000/tutores_emp/${cod_tutor}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cod_tutor, cod_emp, nombre_tutor })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateTe)
    }


    return (
        <MaterialTable
            title="Tutores empresariales"
            columns={state.columns}
            data={tutoresemp}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateTutoresemp(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteTutoresemp(oldData.cod_tutor);                    //AQUI SE DELETEA el tutor 
                        console.log(oldData.cod_tutor);
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

export default TutoresEmpTable