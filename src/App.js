import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';

class App extends Component {
  state = {
    button: false
  }

  handleClick = () => {
    this.setState({
      button: !this.state.button
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Toggle Button</h1>
        </header>
        <ToggleButton buttonState={this.state.button} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
