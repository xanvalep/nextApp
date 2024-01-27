'use client'
import styles from '..//..//styles/navbar.module.css';
import Link from "next/link";
import ToggleButton from './ToogleButton';
import React, { useState,useEffect } from "react";

export default function Navigation(props) {

 const route= props.routes;
 return (
    <>

      <div >
        <ul className={ `nav ${styles.nav }
   
        
        `} id="myTopnav">
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
      
       <ToggleButton label="Subscribe" />
       
       </div>    
    </>
      );
}

