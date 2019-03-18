import React from 'react';
import './Card.css';
import CardContentH1 from './CardContentH1'
import CardContentP from './CardContentP'
import CardContentHandle from './CardContentHandle'

const CardContent = () => {
    return (
        <div>
            <CardContentH1 />
            <CardContentP />
            <CardContentHandle />
        </div>
    );
}

export default CardContent