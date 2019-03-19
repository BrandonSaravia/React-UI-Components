import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='container'>
      <Display />
      <div className='inputPad'>
        <div className='leftPad'>

          <ActionButton text='Clear' />

          <div className='numbers'>
            <NumberButton text='1' />
            <NumberButton text='2' />
            <NumberButton text='3' />
            <NumberButton text='4' />
            <NumberButton text='5' />
            <NumberButton text='6' />
            <NumberButton text='7' />
            <NumberButton text='8' />
            <NumberButton text='9' />
          </div>

          <ActionButton text='0' />

        </div>
        <div className='symbols'>
          <NumberButton text='/' />
          <NumberButton text='*' />
          <NumberButton text='-' />
          <NumberButton text='+' />
          <NumberButton text='=' />
        </div>
      </div>
    </div>
  );
};

export default App;