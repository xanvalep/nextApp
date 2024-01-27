'use client';
import styles  from "../styles/gridb.module.css";
import specific from "../styles/colorsNdSize.module.css";
import About from "@/components/about/About";
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

     < span className={`${styles.grid__title }`}>
     <p className={`${specific.size2} ${specific.line} `}> Hey, My name is  </p>
   </span>
   <span className={ `${styles.grid__name }`}>
      <h1 className={`${specific.size6} ${lilita.className} `}>Zander</h1>
    </span>
     <span className={ `${styles.grid__subheader }`}>
     <p className={`${specific.size3} `}>I build things  for the web
    <span className={specific.btn}>
   <button className={` ${lilita.className} `}type="button" onClick={handlerScroll}>
    scroll
   </button>

    </span>
     
     </p>
   </span>


      </span>
  
 
   <About data={data}/>
        </span> 
         
   </div>
  )
}
