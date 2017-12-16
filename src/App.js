import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import store from './store';

import './App.css';
import Routes from './routes';

const App = () => (
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>
)

export default App;
