import React from 'react'
import Submit from './Submit'
import './popup.css'
import Input from './Input'

export default function PopUp(props) {
  

  
    return (
   
    
        <div className="PopUp">
            <h1>{props.naslovPopUp}</h1>
           
            <p>Unesi PIN</p>
            <Input type="text" change={props.change}/>
        <Submit submited={props.subHandler} />
        </div>
    )
}
