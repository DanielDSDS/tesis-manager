import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

const EspecialidadesTable = ( ) => {
    const [state,setColumns] = useState({
        columns:[
            {title: 'Codigo de Especialidad', field: 'cod_esp'},
            {title: 'Nombre de Especialidad', field: 'nomb_esp'},
        ],
    })
    const [especialidades,setEspecialidades] = useState([]);

    /*
    useEffect(()=>{
        fetchEspecialidades()
    },[])
    */
    
    const fetchEspecialidades = () => {
        fetch('/especialidades')
        .then(res => res.json())
        .then(result => setEspecialidades(result))
        .catch(err => console.log(err.message))
    }

    return(
        <MaterialTable
            title="Ejemplo de tabla"
            columns={state.columns}
            data={especialidades}
            editable={{
                onRowAdd: (newData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                    });
                    }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    if (oldData) {
                        setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                        });
                    }
                    }, 600);
                }),
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
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