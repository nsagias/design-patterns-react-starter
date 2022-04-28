import React from 'react';
import logo from './logo.svg';
import './App.css';
import AbstractFactory from './components/abstractFactory/AbstractFactory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Design Patterns Starter</p>
      </header>
      <AbstractFactory />
    </div>
  );
}

export default App;
