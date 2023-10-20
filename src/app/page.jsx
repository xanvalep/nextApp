'use client';
import styles  from "../styles/gridb.module.css";
import specific from "../styles/colorsNdSize.module.css";
import About from "@/components/about/About";
import Works from "@/components/works/Works";
import React, { useLayoutEffect, useRef,useState,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Lilita_One } from 'next/font/google';
gsap.registerPlugin(ScrollTrigger);

const lilita = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: [ '400']
})


export default function Home() {

  const [loading,setLoading] = useState(false);

  const handlerScroll= () => {
    const element = document.getElementsByClassName('wrapper');
  
    window.scrollTo({
      // top:element?.getBoundingClientRect( ).top,
      top:1200,
      left:0,
      behavior: 'smooth'
    });
  }
  return (
    <div >
        <span>
 <span className={ `${styles.grid} `}>

     < span className={`${styles.grid__title }`}>
     <p className={`${specific.size2} ${specific.line} `}> Hey, My name is  </p>
   </span>
   <span className={ `${styles.grid__name }`}>
      <h1 className={`${specific.size6} ${lilita.className} `}>Zander</h1>
    </span>
     <span className={ `${styles.grid__subheader }`}>
     <p className={`${specific.size3} `}>I build things  for the web
    <span className={specific.btn}>
   <button className={`${specific.button1} ${specific.button} ${lilita.className} `}type="button" onClick={handlerScroll}>Scroll 

      <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 6V14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   </button>
    </span>
     
     </p>
   </span>

   <span className={ `${styles.grid__read }`}>
   </span>

      </span>
  
 
   <About/>
   <Works/>
   

        </span> 
         
   </div>
  )
}
