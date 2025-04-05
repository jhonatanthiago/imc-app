import React, { useState } from 'react';

const ImcCalculator = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = () => {
    const alturaQuadrada = altura * altura;
    const resultadoIMC = peso / alturaQuadrada;
    setImc(resultadoIMC.toFixed(2));

    // Definir categoria de IMC
    if (resultadoIMC < 18.5) {
      setCategoria('Abaixo do peso');
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
      setCategoria('Peso normal');
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
      setCategoria('Sobrepeso');
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
      setCategoria('Obesidade grau 1');
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
      setCategoria('Obesidade grau 2');
    } else {
      setCategoria('Obesidade grau 3');
    }
  };

  return (
    <div className="calculator">
      <div>
        <label>Peso (kg): </label>
        <input 
          type="number" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          placeholder="Ex: 70" 
        />
      </div>
      <div>
        <label>Altura (m): </label>
        <input 
          type="number" 
          step="0.01" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
          placeholder="Ex: 1.75" 
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className="result">
          <h2>Seu IMC: {imc}</h2>
          <h3>{categoria}</h3>
        </div>
      )}
    </div>
  );
};

export default ImcCalculator;
