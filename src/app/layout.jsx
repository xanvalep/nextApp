'use client'
// import Gsapp from '@/components/Gsapp';
import './globals.css'
import Navigation from "@/components/navigation/Navigation";
import PageMenu from '@/components/navigation/PageMenu';
import Foot from '@/components/footer/Foot';
import React, { useRef,useState,useEffect } from "react";
import Loader from '@/components/loader/Loader';
import dta from '@/js/dta';
// import ThreeScene from "@/components/ThreeScene";

export default function RootLayout({ children }) {
  const [loading,setLoading] = useState(false);
  const [isToggled,setToggled] = useState(false);
  const metadata = dta.metadata;
  const links = dta.routesFr;

  {isToggled ? document.body.style.backgroundColor= 'yellow' : console.log('yeah'); }
  const [routes,setRoutes] = useState(links); 
     /* construyendo la funcion cambios de estado*/
     console.log(isToggled,'construyendo la funcion toggle',routes)
  useEffect(() => {
 

    let lastKnownScrollPosition = 0;
    let ticking = false;
  
    function animationNav(scrollPos) {
      // Do something with the scroll position

      let mntop= document.getElementById('mntop');
 
      if (scrollPos > 88) {
        mntop.style.backgroundColor = "gray"
        

      }
      if (scrollPos < 88) {
        mntop.style.backgroundColor = "transparent"
       

      }
    }

    document.addEventListener("scroll", (event) => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          animationNav(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  })
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
  setLoading(true)
  setTimeout(() => { 
    setLoading(false)
   },8000)

  },[]);
  
  return (
    <html lang="en">
      
      <head>
        <title>{metadata.title}</title>
      </head>
      {
        loading ? (
          <body>
          <div className="|">
            <Loader/>
        </div>
            
          </body>
      ): (

       <body>
       {/* <Gsapp/> */}
      <header>
        <nav>
        <Navigation changeState={isToggled => setToggled(isToggled)} routes={  
          routes
        }/>
   
        </nav>
      </header>
      <main className="">
      
     {children}
   
     </main>
 
     {/* <ThreeScene/> */}
     <footer>

     <Foot/>
      </footer>
     </body>
     
      )
      }
    </html>
  )
}
