
import styles from "../../styles/gridb.module.css";
import specific from "../../styles/colorsNdSize.module.css";
import { Lilita_One} from 'next/font/google';
const lilita = Lilita_One({
  variable: '--font-lilita',
  subsets: ['latin'],
  weight: [ '400']
});

export default function Works() {
    return (
      <div
        className={`xxx`}
        style={{ marginTop: "80px", outline: "2px solid blueviolet" }}
      >
        <span className={`${styles.grid} `}>
          <span className={`${styles.ttlWorks}`}>
            <h2 className={`${specific.size6}  ${lilita.className}`}>works</h2>
          </span>

          <span className={`${styles.work__description} anim_2`}>
            {" "}
            Je suis designer graphique et développeur web front-end. je suis
            toujours curieux d'apprendre plus sur les nouvelles technologies et
            le creative coding.
          </span>
   
        </span>
      </div>
    );
  }
  