import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Toggle Button</h1>
        </header>
        <ToggleButton />
      </div>
    );
  }
}

export default App;
