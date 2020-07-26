import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

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
        <div>
            <h4>Carlos tiene hemorroides 😎😎</h4>
        </div>
    );
};

export default App;