'use client';
import styles  from "../styles/gridb.module.css";
import specific from "./page.module.css";
import About from "@/components/about/About";
import React, { useLayoutEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lilita_One, Shadows_Into_Light } from 'next/font/google'
gsap.registerPlugin(ScrollTrigger);

const lilita = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: [ '400']
})
const shadow = Shadows_Into_Light({
  variable: '--font-grechen',
  subsets: ['latin'],
  weight: [ '400']
}) 

export default function Home() {
 
  useLayoutEffect(() => {

    // all your animations go in here...
gsap.from(".wrapper", {
x: 1500,
duration: 1,/*{min: 1, max:1.5}*/
// autoAlpha:0,
alpha:0,
delay: 0.5,
scrollTrigger: { 
  trigger: ".wrapper",
  start: "top center",
  end: "+=800", // end after scrolling 500px beyond the start
  markers: true,
  toggleActions:"play pause reverse reset",
  ease: "none" 

}// start the animation when ".box" enters the viewport (once)

});


}, []);
  const handlerScroll= () => {
    const element = document.getElementsByClassName('.wrapper');
    window.scrollTo({
      top:element?.getBoundingClientRect( ).top,
      left:0,
      behavior: 'smooth'
    });
  }
  return (
    <div >
      <span className={ `${styles.grid}`}>
    <span className={ ``}>
      <p className={specific.welcome}> </p>
    </span>
     < span className={`${styles.grid__title }`}>
     <p className={`${specific.size3} ${specific.line} ${shadow.className}`}> Hey, <br /> My name is  </p>
   </span>
   <span className={ `${styles.grid__name }`}>
      <h1 className={`${specific.size6} ${lilita.className} `}>Zander</h1>
    </span>
     <span className={ `${styles.grid__subheader } ${shadow.className}`}>
     <p className={`${specific.size4} `}>I build things ****** ******* for the web</p>
   </span>

   <span className={ `${styles.grid__read }`}>
    <span className={specific.btn}>
   <button className={`${specific.button1} ${specific.button}`}type="button" onClick={handlerScroll}>Read More</button>
    </span>
   </span>

      </span>
  
   
   <About/>
   </div>
  )
}
