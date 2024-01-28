'use client'
import styles from '..//..//styles/navbar.module.css';
import Link from "next/link";
import ToggleButton from './ToogleButton';
import React, { useState,useEffect } from "react";

export default function Navigation(props) {

  
  const toggle= ()=> {
    // switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
   props.changeState() ? props.changeState (false) : props.changeState(true)
 
   }
   const toggle2= ()=> {
    // switchToggled ? setSwitchToggled (false) : setSwitchToggled(true);
   props.changeState() ? props.changeState (true) : props.changeState(false)
 
   }
 const route= props.routes;
 return (
    <>

      <div >
        <div id='myTopnav' className={ `nav ${styles.nav } 
   
         
   `} >
        <ul >
        {

      route.map(e =>  {
        return (        
                <Link className={styles.links } key={e.label} href={e.route}>
             {e.label}  
             </Link>
        )  
        }) 
      }


      </ul>
      
<div>
{/*  --------------mejorar logica esto es prueba-------------- */ }
  <button  onClick={toggle} data-bs-toggle="collapse" data-bs-target="#main-navbar">click to change </button>
  <button  onClick={toggle2} data-bs-toggle="collapse" data-bs-target="#main-navbar">click to change</button>
</div>

        </div>
       
       </div>    
    </>
      );
}

