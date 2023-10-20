'use client'
import styles from '../styles/navbar.module.css';
import Link from "next/link";
import { useState } from "react";
 const naviLinks=[ 
    
{ label: 'Home',
   route: '/',

 },
 { label: 'About',
   route: '/about',

 },
 { 
   label: 'Works',
   route: '/works',
 }
]
export default function Navigation() {
 const [navLink, setLinks] = useState(naviLinks)
 return (
    <>

      <div >
        <ul className={styles.topnav} id="myTopnav">
        {
      navLink.map(e =>  {
        return (        
                <Link className="" key={e.label} href={e.route}>
             {e.label}  
             </Link>
        
        )  
        }) 
      }
      </ul>
       </div>    
    </>
      );
}

