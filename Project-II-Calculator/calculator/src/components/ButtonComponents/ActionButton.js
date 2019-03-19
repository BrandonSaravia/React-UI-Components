import React from 'react';
import './Button.css';

const ActionButton = props => <button className={props.ActionButtonStyle}>{props.text}</button>;

export default ActionButton;