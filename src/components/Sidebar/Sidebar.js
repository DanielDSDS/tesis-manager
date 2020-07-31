import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

    return(  
        <div className="sidebar-wrapper">
            <h1 className="sidebar-header">t-manager</h1>
            <div className="sidebar-content">
                <NavLink to="/especialidades" activeClassName="active-link">Especialidades</NavLink>
                <NavLink to="/tesistas"  activeClassName="active-link">Tesistas</NavLink>
                <NavLink to="/trabajos_grado"  activeClassName="active-link">Trabajos de Grado</NavLink>
                <NavLink to="/tutores_emp"  activeClassName="active-link">Tutores Empresariales</NavLink>
                <NavLink to="/consejos"  activeClassName="active-link">Consejos</NavLink>
                <NavLink to="/comites"  activeClassName="active-link">Comites</NavLink>
                <NavLink to="/propuestas"  activeClassName="active-link">Propuestas</NavLink>
                <NavLink to="/profesores"  activeClassName="active-link">Profesores</NavLink>
                <NavLink to="/defensas"  activeClassName="active-link">Defensas</NavLink>
                <NavLink to="/instituciones"  activeClassName="active-link">Instituciones</NavLink>
            </div>
        </div> 
    ) 
}

export default Sidebar