import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Especialidades from './components/Especialidades/Especialidades';

const App = () => {
    
    useEffect(() => {
        fetchRequest();
    }, [])

    const fetchRequest = () => {
        const response = fetch('http://localhost:3000/test')
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err.message))
    }

    return(
        <Router>
            <header className="nav-container">
                <h3>Aqui ira el header de navegacion</h3>
            </header>
            <Switch>
                <Route path="/especialidades" component={Especialidades}></Route>
            </Switch>
        </Router>
    );
};

export default App;