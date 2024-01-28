'use client'
// import Gsapp from '@/components/Gsapp';
import './globals.css'
import Navigation from "@/components/navigation/Navigation";
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

  {isToggled ? document.body.style.backgroundColor= 'yellow' : document.body.style.backgroundColor= 'skyblue' }
  const [routes,setRoutes] = useState(links); 
     /* construyendo la funcion cambios de estado*/
     console.log(isToggled,'construyendo la funcion toggle',routes)
  useEffect(() => {
 

    let lastKnownScrollPosition = 0;
    let ticking = false;
  
    function animationNav(scrollPos) {
      // Do something with the scroll position

      let poin2 = document.getElementById('myTopnav');
 
      if (scrollPos > 88) {
        poin2.style.top = "-88px";

      }
      if (scrollPos < 88) {
        poin2.style.top = "0";

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
   },3000)

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
