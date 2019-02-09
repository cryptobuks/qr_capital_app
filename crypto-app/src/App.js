import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Board</h1>
        </header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
