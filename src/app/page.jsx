'use client';
import styles  from "../styles/gridb.module.css";
import About from "@/components/about/About";
import Logo from "@/components/svg/logo";
import dta from "@/js/dta";

//import Works from "@/components/works/Works"; no borrar agregar y editar nuevas cosas
import React, { useLayoutEffect, useRef,useState,useEffect } from "react";
//import gsap from "gsap";
//import { ScrollTrigger} from "gsap/ScrollTrigger";
import { Lilita_One } from 'next/font/google';


const lilita = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: [ '400']
})

const info = dta.documentation[0];
export default function Home(props) {
  console.log('--------page home--------------');
  const [data,setData] = useState(info); 

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
  <span className={ `${styles.grid__hero} `}>  <Logo fillColor="red" />   </span>


      </span>
  
 
   <About data={data}/>
        </span> 
         
   </div>
  )
}
