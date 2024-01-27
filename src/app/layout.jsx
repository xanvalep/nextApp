'use client'
// import Gsapp from '@/components/Gsapp';
import './globals.css'
import Navigation from "@/components/navigation/Navigation";
import Foot from '@/components/footer/Foot';
import React, { useRef,useState,useEffect } from "react";
import Loader from '@/components/loader/Loader';
import dta from '@/js/dta';
// import ThreeScene from "@/components/ThreeScene";

       const metadata = dta.metadata;
       const links = dta.routes
export default function RootLayout({ children }) {

  const [loading,setLoading] = useState(false);
  const [routes,setRoutes] = useState(links); 

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
        <Navigation routes={  
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
