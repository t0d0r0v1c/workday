import React from 'react'

export default function (props) {
   const subStyle = {
    marginTop: '14px',
    padding: '11px 35px',
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    borderRadius: '6px'
   }
   
    return (
        <div>
            <button type='submit' style={subStyle} onClick={props.submited}>OK</button>
        </div>
    )
}
