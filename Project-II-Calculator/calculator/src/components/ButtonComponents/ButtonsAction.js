import React from 'react';
import './Button.css';



function ButtonsAction(props) {
    return (
      <div className="actionButtonSection">
        <div className="actionButtons">
            <button>{props.actionProp.text}</button>
        </div>
      </div>
    );
  }

  
  export default ButtonsAction;