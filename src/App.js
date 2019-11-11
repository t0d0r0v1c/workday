import React, {Component} from 'react';
import './App.css';
import ShowDate from './date'
import MyClock from './MyClock'
import Button from './button'
import PopUp from './PopUp'
import Backdrop from './backdrop'
import Welcome from './Welcome'
import './Header.css'


    
     
  
class App extends Component {
 
 state= {
   showPopUp:false,
   showWelcome:false,
   naslovPopUp:null,
   naslovWelcome:null,
   curentUser:null,
   pin: "",
   users: [
     {name: 'Jovan',
    pin:'1234'},
     {name: 'Jovana',
    pin:'4321'},
     {name:'Beli',
    pin:'6666'
    }
   ]
  
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
    showPopUp: false,
    showWelcome:false, 
    curentUser:null,
    pin: ""

  })
}

setPinHandler = (e) => {
  this.setState({
    pin:e.target.value
  })
}

submitHalder = () => {


  if (this.state.naslovPopUp==='Prijavi dolazak na posao'){
    this.setState({
      showPopUp:false,
      showWelcome:true,
      naslovWelcome:'Uspesno ste se prijavili'
    
    })
    }

    if (this.state.naslovPopUp==='Prijavi odlazak sa posla'){
      this.setState({
        showPopUp:false,
        showWelcome:true,
        naslovWelcome:'dovidjenja'
      
      })
      }
 const filteredUser = this.state.users.filter(user=>user.pin === this.state.pin )
console.log(filteredUser)
if( filteredUser.length === 0){
  this.setState({naslovWelcome : 'pogresan pin pokusajte ponovo'})
}
else{this.setState({
   curentUser:filteredUser[0].name
 })}
}
      


  render(){
    const dolazakStyle = {
      background:"#00ff048f"
    }
    const odlazakStyle = {
      background: "#ff00009c"
    }
    
  return (
    
    <div className="App">
     <div className="Header">
       <ShowDate />
       
       <MyClock />
      </div>
    <Button tekstNaDugmetu={'Prijava Dolaska'} dugmetovMetod={this.dolazakHandler} style={dolazakStyle} />
    <Button tekstNaDugmetu={'Prijava Odlaska'} dugmetovMetod={this.odlazakHandler} style={odlazakStyle}/>
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
    


    {this.state.showWelcome ? ( <>
    <Welcome name={this.state.curentUser} pozdravnaPoruka={this.state.naslovWelcome} zatvori={this.backdropHandler}/>
    <Backdrop clicked = {this.backdropHandler} />
    </>)
    :null
    }
   
    </div>

   
  );
}
}

export default App;
