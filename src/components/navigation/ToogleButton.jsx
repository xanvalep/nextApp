import {useState } from "react";

export default function ToogleButton() {
const [isToggled, setToggle] = useState(false);
const handleToggler =  () => {
    return  !isToggled ;


};
return(
    <div>
    <button onClick={handleToggler}>
               { isToggled ? 'ON' : 'OFF'}   
    </button>
    
    </div>
)
}