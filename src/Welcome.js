import React from 'react'
import "./Welcome.css"

export default function Welcome(props) {
    return (
        <div className="WelcomeScreen">
            <h3>Zdravo {props.name}</h3>
    <p>{props.pozdravnaPoruka}</p>
    <button onClick={props.zatvori}>Zatvori</button>
        </div>
    )
}
