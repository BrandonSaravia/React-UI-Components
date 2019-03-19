import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'


const App = () => {
  return (
    <div className='citeContainer'>
      <div className='headerContainer'>
        <HeaderContainer />
      </div>
      <div className='CardContainer'>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;


