import React, { Component } from 'react';
import NavBar from './navbar/navbar';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar titulo="Oneide's Home Page" cor="blue" />
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
