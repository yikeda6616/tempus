import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  function onClick() {
    axios.get('http://localhost:3001/').then(res => {
      console.log(res);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
