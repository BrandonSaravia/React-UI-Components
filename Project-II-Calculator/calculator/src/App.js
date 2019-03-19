import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberedButtons from './components/ButtonComponents/Numberedbuttons'
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ButtonClear';
import Button0 from './components/ButtonComponents/Button0';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <ClearButton />
      <NumberedButtons />
      <Button0 />
      <ActionButton />
    </div>
  );
};

export default App;