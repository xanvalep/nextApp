'use client';
import styles from "../../styles/gridb.module.css";
// import gridSite  from "../../styles/gridSite.module.css";
import Works from "@/components/works/Works";
import specific from "../../styles/colorsNdSize.module.css";
import React, {useState } from "react";
import { Lilita_One} from "next/font/google";
import dta from "@/js/dta";
const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: ["400"],
});
let info = dta.documentation[0].contact;
export default function Contact() {

  const [data,setData] = useState(info); //pasar por props mas adelante
  return (
    <div
      className={`wrapper`}
      style={{ marginTop: "80px", outline: "2px solid blueviolet" }}
    >
      <span className={`${styles.grid} `}>
        <span className={`${styles.grid__accent} ${specific.size4}` }>
          <h2
            className={` ${lilita.className} `}
          >
           write me!
          </h2>
        </span>
        <span
          className={`${styles.grid__description} ${specific.size1}`}
        >
      <Works>   
      </Works>
        </span>
      </span>
    </div>
  );
}
