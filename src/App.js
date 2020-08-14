import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Especialidades from './components/Especialidades/Especialidades';
import Tesistas from './components/Tesistas/Tesistas';
import TrabajosGrado from './components/TrabajosGrado/TrabajosGrado';
import TrabajoGrado from './components/TrabajosGrado/TrabajoGrado';
import TutoresEmp from './components/TutoresEmp/TutoresEmp';
import Consejos from './components/Consejos/Consejos';
import Comites from './components/Comites/Comites';
import Propuestas from './components/Propuestas/Propuestas';
import Propuesta from './components/Propuestas/Propuesta';
import Profesores from './components/Profesores/Profesores';
import Defensas from './components/Defensas/Defensas';
import Instituciones from './components/Instituciones/Instituciones';
import Sidebar from './components/Sidebar/Sidebar';
import Empresas from './components/Empresas/Empresas'
const App = () => {

    return (
        <Router>
            <div className="app-wrapper">
                <Sidebar />
                <Switch>
                    <Route path="/especialidades" component={Especialidades} />
                    <Route path="/tesistas" component={Tesistas} />
                    <Route path="/trabajos_grado" component={TrabajosGrado} />
                    <Route path="/tutores_emp" component={TutoresEmp} />
                    <Route path="/consejos" component={Consejos} />
                    <Route path="/comites" component={Comites} />
                    <Route path="/propuestas" component={Propuestas} />
                    <Route path="/profesores" component={Profesores} />
                    <Route path="/defensas" component={Defensas} />
                    <Route path="/instituciones" component={Instituciones} />
                    <Route path="/propuesta" component={Propuesta} />
                    <Route path="/empresas" component={Empresas} />
                    <Route path="/trabajogrado" component={TrabajoGrado} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;