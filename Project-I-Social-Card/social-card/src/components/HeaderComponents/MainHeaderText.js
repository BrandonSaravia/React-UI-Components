import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'

const MainHeaderText = () => {
    return (
    <div className='mainHeaderText'>
        <HeaderContent /> 
        <HeaderTitle />
    </div>
    )
}

export default MainHeaderText