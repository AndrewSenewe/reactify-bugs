import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bug Tracker <small>by HACKTIV8</small></h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
