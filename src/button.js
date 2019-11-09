import React from 'react'
import "./Button.css"

export default function Button(props) {
    
        return (
            
                 <button className="myButton" onClick={props.dugmetovMetod}>{props.tekstNaDugmetu}</button>
                
            
        )
    }

