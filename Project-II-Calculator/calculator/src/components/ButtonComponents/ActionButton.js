import React from 'react';
import './Button.css';
import ButtonsAction from './ButtonsAction'


const actionButtons = [
    {
        text: '/'
    },
    {
        text: '*'
    },
    {
        text: '-'
    },
    {
        text: '+'
    },
    {
        text: '='
    }
]

function ActionButton() {
    return(
        <div>
            {actionButtons.map(textFromMap =>(
                <ButtonsAction actionProp={textFromMap} />
            ))}
        </div>
    )
}

export default ActionButton;