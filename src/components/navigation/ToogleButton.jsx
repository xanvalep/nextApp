import {useState } from "react";

export default function ToogleButton({ initialState, updateState }) {
// crea un estado por el switch 
const [buttonState, setButtonState] = useState(initialState);
   
const handleClick = () => {
  const newState = !buttonState; // Toggle the state
  setButtonState(newState); // Update the state
  updateState(newState); // Notify the parent about the state change
 console.log("hello");
}
return (
  <div>
    <button
    id="menu-button"
      onClick={handleClick}
      className={buttonState ? "button toggled" : "button toggle"}
      
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);
}