import React from 'react';
import logo from './logo.svg';
import './App.css';
import AbstractFactoryFunctionBased from './components/abstractFactory/AbstractFactoryFunctionBased';
import AbstractFactoryClassBased from './components/abstractFactory/AbstractFactoryClassBased';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Design Patterns Starter</p>
      </header>
      <AbstractFactoryClassBased name={"Nick ClassBased Abstract Factory"} />
      <AbstractFactoryFunctionBased name={"Nick Function Abstract Factory"} />
    </div>
  );
}

export default App;
