import {useState } from "react";
import styleBut from "../../styles/navbar.module.css";
export default function ToogleButton() {
// crea un estado por el switch 
const [switchToggled,setSwitchToggled]= useState(false);
   
const toggle= ()=> {
  switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
  console.log(switchToggled);
}
return(
    <div>
     <button  onClick={toggle} className={switchToggled ? "button active" : "button"}  data-bs-toggle="collapse" data-bs-target="#main-navbar"></button>
    </div>
)
}