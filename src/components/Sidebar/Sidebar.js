import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <div className="sidebar-wrapper">
            <h1 className="sidebar-header">t-manager</h1>
            <div className="sidebar-content recursive">
                <NavLink to="/propuestas" className="sidebar-text" activeClassName="active-link"><span className="material-icons">rule</span>Propuestas</NavLink>
                <NavLink to="/trabajos_grado" className="sidebar-text" activeClassName="active-link"><span className="material-icons">history_edu</span>Trabajos de Grado</NavLink>
                <NavLink to="/tesistas" className="sidebar-text" activeClassName="active-link"><span className="material-icons">account_box</span>Tesistas</NavLink>
                <NavLink to="/profesores" className="sidebar-text" activeClassName="active-link"><span className="material-icons">menu_book</span>Profesores</NavLink>
                <NavLink to="/defensas" className="sidebar-text" activeClassName="active-link"><span className="material-icons">record_voice_over</span>Defensas</NavLink>
                <NavLink to="/consejos" className="sidebar-text" activeClassName="active-link"><span className="material-icons">meeting_room</span>Consejos</NavLink>
                <NavLink to="/comites" className="sidebar-text" activeClassName="active-link"><span className="material-icons">account_balance</span>Comites</NavLink>
                <NavLink to="/tutores_emp" className="sidebar-text" activeClassName="active-link"><span className="material-icons">engineering</span>Tutores Empresariales</NavLink>
                <NavLink to="/especialidades" className="sidebar-text" activeClassName="active-link"><span className="material-icons">school</span>Especialidades</NavLink>
                <NavLink to="/instituciones" className="sidebar-text" activeClassName="active-link"><span className="material-icons">domain</span>Instituciones</NavLink>
            </div>
        </div>
    )
}

export default Sidebar