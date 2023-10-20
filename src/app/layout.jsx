'use client'
// import Gsapp from '@/components/Gsapp';
import './globals.css'
import Navigation from "@/components/Navigation";
import React, { useLayoutEffect, useRef,useState,useEffect } from "react";
// import ThreeScene from "@/components/ThreeScene";

export const metadata = {
  title: 'Portafolio Next App',
  description: 'my Portafolio with three and next',
}

export default function RootLayout({ children }) {
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
  setLoading(true)
  setTimeout(() => { 
    setLoading(false)
   },5000)

  },[]);
  
  return (
    <html lang="en">
      
      <head>
        <title>{metadata.title}</title>
      </head>
      {
        loading ? (
          <div className="|">
            <div className="loader">

        
            </div>
        </div>
      ): (

       <body>
       {/* <Gsapp/> */}
      <header>
        <nav>
        <Navigation/>
        </nav>
      </header>
      <main className="">
     {children}
     </main>
     {/* <ThreeScene/> */}
     </body>
     
      )
      }
    </html>
  )
}
