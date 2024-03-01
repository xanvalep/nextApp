'use client'
import PageMenu from "./PageMenu";
import Link from "next/link";
import ToggleButton from './ToogleButton';
import React, { useState,useEffect } from "react";

export default function Navigation(props) {
  const [isToggled,setToggled] = useState(false);
  
  const toggle= ()=> {
    // switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
      setToggled(!isToggled)
   }


 return (
  <div id='topNav' className={ `nav `} >
     <div className="menu"> 

     <div className="header-side-content">

			<button onClick={toggle} className= {isToggled ? 'button toggled' : 'button toggle'} id="menu-button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		
		</div>

		<a href="/">logo</a>

		<div className="header-side-content">
			<nav id="nav-social">
				<ul className="unstyled">
					<li><a href="">YouTube</a></li>
					<li><a href="">Facebook</a></li>
					<li><a href="">Instagram</a></li>
				</ul>
			</nav>
		</div>
     

     </div>

         <PageMenu routes={props.routes} status={isToggled}/>
       </div>
 
      )
}

{
  /*     
  
  
          <div id='myTopnav' classNameNameName={ `nav ${styles.nav } 
   
         
   `} >
        <ul >
        {

      route.map(e =>  {
        return (        
                <Link classNameNameName={styles.links } key={e.label} href={e.route}>
             {e.label}  
             </Link>
        )  
        }) 
      }


      </ul>
      
<div>

  <button  onClick={toggle} data-bs-toggle="collapse" data-bs-target="#main-navbar">click to change </button>
</div>

        </div>
  
  
  
  
  */ 
}