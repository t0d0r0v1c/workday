import React from 'react'
import "./Button.css"

export default function Button(props) {
    
        return (
            
        <button style={props.style} className="myButton" onClick={props.dugmetovMetod}>{props.tekstNaDugmetu} </button>
                
            
        )
    }

