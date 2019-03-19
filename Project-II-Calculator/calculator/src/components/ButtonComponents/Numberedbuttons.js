import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'


const numberedButton = [
    {
        text: '1'
    },
    {
        text: '2'
    },
    {
        text: '3'
    },
    {
        text: '4'
    },
    {
        text: '5'
    },
    {
        text: '6'
    },
    {
        text: '7'
    },
    {
        text: '8'
    },
    {
        text: '9'
    }
]

function NumberedButtons() {
    return(
        <div>
            {numberedButton.map(textFromMap =>(
                <NumberButton numberProp={textFromMap} />
            ))}
        </div>
    )
}

export default NumberedButtons;