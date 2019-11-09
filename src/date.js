import React from 'react'
import "./Datum.css"

export default function ShowDate() {

    
let today = new Date();
let monthName = (today.getMonth()+1);
let currentYear = today.getFullYear();
let ime;  



       switch (monthName) {
         case 1:
           ime = 'Januar'
           break;
           case 2:
              ime = 'Februar'
              break; 
              case 3:
           ime = 'Mart'
           break; 
           case 4:
           ime = 'April'
           break;
           case 5:
           ime = 'Maj'
           break; 
           case 6:
           ime = 'Jun'
           break;
           case 7:
           ime = 'Jul'
           break;
           case 8:
           ime = 'Avgust'
           break;
           case 9:
           ime = 'Septembar'
           break;
           case 10:
           ime = 'Oktobar'
           break;
           case 11:
           ime = 'Novembar'
           break;
           case 12:
           ime = 'Decembar'
           break;
       
         default:
           ime='Januar'
           break;
       } 

      let date = today.getDate();
    return (
        <div className="Datum">
             <p>{date}  {ime} {currentYear} </p>
        </div>
    )
}
