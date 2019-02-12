import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import CryptoContainer from './components/CryptoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React and Ruby on Rails login</h1>
          <h2>by: Mateus Villas Boas</h2>
          <h2>for QR Capital</h2>
        </header>
        <LoginForm />
        <p></p>
      </div>
    );
  }
}

export default App;
