import React from 'react'

export default function Input(props) {
    
    const inputStyle={
        width:'40px',
        padding:'7px',
      }
       
      
    
    return (
        <div>
            <input type="password" onChange={props.change} style={inputStyle}/>
        </div>
    )
}
