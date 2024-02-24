'use client'

import Link from "next/link";
import ToggleButton from './ToogleButton';
import React, { useState,useEffect } from "react";

export default function Navigation(props) {

  
  const toggle= ()=> {
    // switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
   props.changeState() ? props.changeState (false) : props.changeState(true)
 
   }

 const route= props.routes;
 return (
  <div id='topNav' className={ `nav `} >
     
     <div className="header-side-content">

			<button className="button" id="menu-button">
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