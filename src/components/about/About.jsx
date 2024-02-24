import styles from "../../styles/gridb.module.css";
// import gridSite  from "../../styles/gridSite.module.css";
import specific from "../../styles/colorsNdSize.module.css";
import { Lilita_One} from "next/font/google";
const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: ["400"],
});

export default function About(props) {
  const data= props.data;

  return (
    <div
      className={`wrapper`}
      style={{ marginTop: "80px", outline: "2px solid blueviolet" }}
    >
      <span className={`${styles.grid} `}>
        <span className={`${styles.ttlBout}`}>
          <h2
            className={` ${lilita.className} `}
          >
            About Me
          </h2>
        </span>
        <span
        >
    
   
        </span>
        <span
          className={`${styles.grid__description} ${specific.size1}`}
        >
          {data.information}
   
        </span>
      </span>
    </div>
  );
}
