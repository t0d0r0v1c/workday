import React, {Component} from 'react';
import './App.css';
import ShowDate from './date'
import MyClock from './MyClock'
import Button from './button'
import PopUp from './PopUp'
import Backdrop from './backdrop'
import Welcome from './Welcome'


    
     
  
class App extends Component {

 state= {
   showPopUp:false,
   showWelcome:false,
   naslovPopUp:null,
   pin: ""

 } 


dolazakHandler =()=>{
  this.setState({naslovPopUp : 'Prijavi dolazak na posao'})
  this.setState({
    showPopUp: true
  })}

odlazakHandler = () => {
  this.setState({naslovPopUp : 'Prijavi odlazak sa posla'})
  this.setState({
    showPopUp:true
  })
}
backdropHandler = () => {
  
  this.setState({
    showPopUp: false
  })
}

setPinHandler = (e) => {
  this.setState({
    pin:e.target.value
  })
}

submitHalder = () => {
console.log(this.state.pin)
}
  render(){
    

  return (
    <div className="App">
     <Welcome />
       <ShowDate />
       
       <MyClock />
      
    <Button tekstNaDugmetu={'Prijava Dolaska'} dugmetovMetod={this.dolazakHandler}/>
    <Button tekstNaDugmetu={'Prijava Odlaska'} dugmetovMetod={this.odlazakHandler}/>
    {this.state.showPopUp ? ( <>
    <PopUp 
      naslovPopUp={this.state.naslovPopUp} 
      subHandler={this.submitHalder} 
      change={this.setPinHandler}
      
      />
    <Backdrop clicked = {this.backdropHandler}/>
    </>)
    :null
    }
    
   
    </div>

   
  );
}
}

export default App;
