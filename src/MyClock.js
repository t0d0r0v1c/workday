import React, { Component } from 'react'
import Clock from 'react-live-clock';
import "./MyClock.css"



export default class MyClock extends Component {
    render() {
        
    return(
    <div className="ImLate">
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Belgrade'} />
      </div>  
    )
            
        
    }
}
