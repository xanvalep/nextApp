'use client'
// import Gsapp from '@/components/Gsapp';
import './globals.css'
import Navigation from "@/components/Navigation";
// import ThreeScene from "@/components/ThreeScene";

export const metadata = {
  title: 'Portafolio Next App',
  description: 'my Portafolio with three and next',
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
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
    </html>
  )
}
