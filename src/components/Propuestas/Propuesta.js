import React, { useState, useEffect } from 'react'

const Propuesta = ({ location }) => {
    const { fec_entrega, id_propuesta, nombre_t, titulo_propuesta } = location.state

    return (
        <div className="content-container">
            <h2 className="content-title">Propuesta #{id_propuesta}</h2>
            <h4 className="content-subtitle">{titulo_propuesta}</h4>
            <div className="propuesta-container">
            </div>
        </div>
    )
}

export default Propuesta