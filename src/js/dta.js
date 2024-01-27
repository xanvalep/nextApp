
 const metadata = {
    title: 'Portafolio Next App',
    description: 'my Portafolio with three and next',
  }
const routes=[ 
      
    { label: 'Home',
       route: '/',
    
     },
     { label: 'Contactame',
       route: '/contacto',
     }
    ]

 const documentation =   [
        {
          
           information:" Soy diseñador gráfico y desarrollador web front-end. Siempre tengo curiosidad por aprender más sobre nuevas tecnologías y codificación creativa,",
           contact:" estoy inventando algo solo para la prueba"
      },
      {
          
        information:" Je suis designer graphique et développeur web front-end. je suis toujours curieux d'apprendre plus sur les nouvelles technologies et le creative coding.,",
        contact:" estoy inventando algo solo para la prueba"
   }

      ]


      export default {
       documentation,routes,metadata
    }