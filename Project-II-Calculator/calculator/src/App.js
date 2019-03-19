import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberedButtons from './components/ButtonComponents/Numberedbuttons'
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <NumberedButtons />
      <ActionButton />
    </div>
  );
};

export default App;