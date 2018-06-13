import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Overview from './components/product/Overview';
import Main from './components/Main';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faListUl from '@fortawesome/fontawesome-free-solid/faListUl';
import faCubes from '@fortawesome/fontawesome-free-solid/faCubes';
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';


import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

fontawesome.library.add(faListUl, faCubes, faDollarSign, faUser)

class App extends Component {
  render() {
    return (
      <div className="test columns">
        <Sidebar />
        <Overview />
        <Main />
      </div>
    );
  }
}

export default App;
