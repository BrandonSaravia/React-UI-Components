import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberedButtons from './components/ButtonComponents/Numberedbuttons'

const App = () => {
  return (
    <div className='container'>
      <Display />
      <NumberedButtons />
    </div>
  );
};

export default App;