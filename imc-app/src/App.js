import React, { useState } from 'react';
import './App.css';
import ImcCalculator from './components/ImcCalculator';

function App() {
  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <ImcCalculator />
    </div>
  );
}

export default App;
