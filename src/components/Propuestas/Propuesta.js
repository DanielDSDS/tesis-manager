import React, { useState, useEffect } from 'react'

const Propuesta = ({ location }) => {
    console.log(location.state)
    return (
        <div>
            Hola desde una propuesta especifica
        </div>
    )
}

export default Propuesta