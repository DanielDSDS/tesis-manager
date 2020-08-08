import { React, useState, useEffect } from 'react'
import MaterialTable from 'material-table'

//cedula_t, nombre_t, correo_ucab_t, correo_particular_t, telefono_contacto_t
const TesistasTable = () => {
    const [tesistas,setTesista] = useState([{}]);
    const [state,setState] = useState({
        columns: [
            { title: 'Cedula', field: 'cedula_t' },
            { title: 'Nombre', field: 'nombre_t' },
            { title: 'email UCAB', field: 'correo_ucab_t' },
            { title: 'email', field: 'correo_particular_t' },
            { title: 'Telefono', field: 'telefono_contacto_t' },
        ],
        data: []
    })
    return(
        <div>
        </div>
    )
}

export default TesistasTable