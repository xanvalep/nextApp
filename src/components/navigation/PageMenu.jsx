'use client'
import Link from "next/link";

export default function PageMenu(props) {
const routes = props.routes;	
 return (
    
    <div id="menu-container" className={props.status ? "pMenu" : "pMenInac"} >


		<ul class="unstyled">
		
			{
                 routes.map(e =>  {
					return (        
							<Link className="unstyled" key={e.label} href={e.route}>
						 {e.label}  
						 </Link>
					)  
					}) 


			}
		</ul>

  </div>
      )
}

