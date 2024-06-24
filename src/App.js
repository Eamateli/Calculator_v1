import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    setDisplay((prev) => {
      if (prev === '0' && value !== '.' && !isNaN(value)) {
        return value;
      }
      if (isNaN(value) && isNaN(prev.slice(-1))) {
        return prev;
      }
      return prev + value;
    });
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      setDisplay((prev) => {
        const result = eval(prev);
        return result.toString();
      });
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
      </div>
    </div>
  );
};

export default App;
