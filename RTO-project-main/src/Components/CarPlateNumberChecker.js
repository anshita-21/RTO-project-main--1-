// CarPlateNumberChecker.js
import React, { useState } from 'react';

const CarPlateNumberChecker = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [result, setResult] = useState('');

  const handlePlateNumberChange = (e) => {
    setPlateNumber(e.target.value);
  };

  const checkScheme = () => {
    const lastTwoDigits = parseInt(plateNumber.slice(-2));

    if (isNaN(lastTwoDigits)) {
      setResult('Invalid input');
    } else if (lastTwoDigits % 2 === 0) {
      setResult('Even Scheme');
    } else {
      setResult('Odd Scheme');
    }
  };

  return (
    <div>
      <h2>Car Plate Number Checker</h2>
      <label>
        Enter Car Plate Number:
        <input type="text" value={plateNumber} onChange={handlePlateNumberChange} />
      </label>
      <button onClick={checkScheme}>Check Scheme</button>
      <p>{result}</p>
    </div>
  );
};

export default CarPlateNumberChecker;
