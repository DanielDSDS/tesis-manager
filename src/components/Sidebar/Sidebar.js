import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <div className="sidebar-wrapper recursive">
            <h1 className="sidebar-header">t-manager</h1>
            <div className="sidebar-content">
                <NavLink to="/propuestas" activeClassName="active-link">Propuestas<span className="material-icons">rule</span></NavLink>
                <NavLink to="/trabajos_grado" activeClassName="active-link">Trabajos de Grado<span className="material-icons">history_edu</span></NavLink>
                <NavLink to="/tesistas" activeClassName="active-link">Tesistas<span className="material-icons">account_box</span></NavLink>
                <NavLink to="/profesores" activeClassName="active-link">Profesores<span className="material-icons">menu_book</span></NavLink>
                <NavLink to="/defensas" activeClassName="active-link">Defensas<span className="material-icons">record_voice_over</span></NavLink>
                <NavLink to="/consejos" activeClassName="active-link">Consejos<span className="material-icons">meeting_room</span></NavLink>
                <NavLink to="/comites" activeClassName="active-link">Comites<span className="material-icons">account_balance</span></NavLink>
                <NavLink to="/tutores_emp" activeClassName="active-link">Tutores Empresariales<span className="material-icons">engineering</span></NavLink>
                <NavLink to="/especialidades" activeClassName="active-link">Especialidades<span className="material-icons">school</span></NavLink>
                <NavLink to="/instituciones" activeClassName="active-link">Instituciones<span className="material-icons">domain</span></NavLink>
            </div>
        </div>
    )
}

export default Sidebar