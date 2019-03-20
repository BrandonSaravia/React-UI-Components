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
        
          <ActionButton ActionButtonStyle="buttonStyle" text='Clear' />

          <div className='numbers'>
            <NumberButton buttonStyle='numberStyle' text='7' />
            <NumberButton buttonStyle='numberStyle' text='8' />
            <NumberButton buttonStyle='numberStyle' text='9' />
            <NumberButton buttonStyle='numberStyle' text='4' />
            <NumberButton buttonStyle='numberStyle' text='5' />
            <NumberButton buttonStyle='numberStyle' text='6' />
            <NumberButton buttonStyle='numberStyle' text='1' />
            <NumberButton buttonStyle='numberStyle' text='2' />
            <NumberButton buttonStyle='numberStyle' text='3' />
          </div>

          <ActionButton ActionButtonStyle="buttonStyle" text='0' />
        </div>

        <div className='symbols'>
          <NumberButton buttonStyle='symbolStyle' text='/' />
          <NumberButton buttonStyle='symbolStyle' text='*' />
          <NumberButton buttonStyle='symbolStyle' text='-' />
          <NumberButton buttonStyle='symbolStyle' text='+' />
          <NumberButton buttonStyle='symbolStyle' text='=' />
        </div>
      </div>
    </div>
  );
};

export default App;