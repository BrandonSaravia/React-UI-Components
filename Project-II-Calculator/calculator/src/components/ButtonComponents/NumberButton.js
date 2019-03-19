import React from 'react';
import './Button.css';



function NumberButton(props) {
    return (
      <div className="NumberButton">
        <div className="student-info">
            <button>{props.numberProp.text}</button>
        </div>
      </div>
    );
  }

  
  export default NumberButton;
