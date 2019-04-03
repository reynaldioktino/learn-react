import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Button from './components/Button'

class App extends Component {
  //button onclick, ondrag?????
  render() {
    return ( <div className = "App" >
      <Header title="Selamat Datang" desc="welcome" />
      < Header title = "CObaaaa laah" desc = "website x" / >
      <Button message="hiyahiya" />
      </div>
    );
  }
}

export default App;