import React from 'react';
import Home from './pages/Home';
import Testing from './pages/Testing';
import { Route } from 'react-router-dom';

const Routes = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={Testing} />
    </div>
)

export default Routes;