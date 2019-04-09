import React from 'react';
import './ToggleButton.css';

const ToggleButton = (props) => {
    let buttonOnOrOff = ""
    let OnOrOff = ""

    if (!props.buttonState) {
        buttonOnOrOff = "buttonOn"
        OnOrOff = "ON"
    } else {
        buttonOnOrOff = "buttonOff"
        OnOrOff = "OFF"
    }


    return (
        <div>
            <h1>{OnOrOff}</h1>
            <div className="buttonContainer" onClick={props.handleClick}>
                <div className={buttonOnOrOff}></div>
            </div>
        </div>
    )
} 

export default ToggleButton;