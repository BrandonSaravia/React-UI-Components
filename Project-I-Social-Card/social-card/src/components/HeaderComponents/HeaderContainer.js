import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import MainHeaderText from './MainHeaderText'

const HeaderContainer = () => {
    return (
    <div className='innerHeader'>
        <ImageThumbnail /> 
        <MainHeaderText />
    </div>
    )
}

export default HeaderContainer