import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

/*
    (documentacion)
    De tener tiempo se puede hacer un custom hook

EspecialidadesTable.js
    const {handleUpdate, handleFetch, handleDelete} = useTable('/especialidades')
    
    useEffect(() => {
        handleFetch();
    },[])   

    ...

useTable.js
    const [state,setState] = useState([{}])
    
    -> handleUpdate recibe cod_esp
    -> hadleDelete recibe datos para actualizacion 
    -> handleUpdate no recibe parametros y retorna las tablas
*/

const EspecialidadesTable = () => {
    //estado del componente
    const [especialidades, setEspecialidades] = useState([{}]);
    //estado para los titulos de las columnas de la tabla 
    //NOTA: EL CAMPO FIELD DEBE SER EL MISMO NOMBRE QUE TIENE EL ATRIBUTO EN LA BD, SINO SE ROMPE
    //TODAS LAS VARIABLES DE LAS TABLAS DEBEN TENER EL MISMO NOMBRE QUE EN LA BD
    const [state, setState] = useState({
        columns: [
            { title: 'id', field: 'cod_esp' },
            { title: 'Nombre de Especialidad', field: 'nombre_esp' },
        ],
        data: []
    })

    //Cuando se renderiza el componente se llama la funcion que obtiene todas las especialidades
    useEffect(() => {
        fetchEspecialidades()
    }, [])

    //obtener todas las especialidades
    const fetchEspecialidades = () => {
        fetch('http://localhost:3000/especialidades')
            .then(res => res.json())
            .then(result => setEspecialidades(result))
            .catch(err => console.log(err.message))
    }

    //eliminar una especialidad
    const deleteEspecialidad = (cod_esp) => {
        console.log(cod_esp)
        fetch(`http://localhost:3000/especialidades/${cod_esp}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    //actualizar una especialidad
    const updateEspecialidad = (especialidad) => {
        console.log(especialidad)
        const { cod_esp, nombre_esp } = especialidad;
        const updateE = fetch(`http://localhost:3000/especialidades/${cod_esp}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ cod_esp, nombre_esp })
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
        console.log(updateE)
    }

    return (
        <MaterialTable
            title="Especialidades"
            columns={state.columns}
            data={especialidades}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    updateEspecialidad(newData);                //AQUI SE ACTUALIZA EL CAMPO
                                    console.log(newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        deleteEspecialidad(oldData.cod_esp);                    //AQUI SE DELETEA LA ESPECIALIDAD
                        console.log(oldData.cod_esp);
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

export default EspecialidadesTable