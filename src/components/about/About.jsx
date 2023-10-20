import styles from "../../styles/gridb.module.css";
// import gridSite  from "../../styles/gridSite.module.css";
import specific from "../../styles/colorsNdSize.module.css";
import { Lilita_One, Grechen_Fuemen } from "next/font/google";
const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: ["400"],
});
const grechen = Grechen_Fuemen({
  variable: "--font-grechen",
  subsets: ["latin"],
  weight: ["400"],
});
export default function About() {
  return (
    <div
      className={`wrapper`}
      style={{ marginTop: "80px", outline: "2px solid blueviolet" }}
    >
      <span className={`${styles.grid} `}>
        <span className={`${styles.grid__accent} ${specific.size6}  anim_1`}>
          <h2
            className={`${styles.grid__accent} ${specific.size6}  ${lilita.className}  anim_1`}
          >
            Abo* <br /> **ut
            <br />
            **Me{" "}
          </h2>
        </span>
        <span
          className={`${styles.grid__description} ${specific.size1} anim_2`}
        >
          {" "}
          Je suis designer graphique et développeur web front-end. je suis
          toujours curieux d'apprendre plus sur les nouvelles technologies et le
          creative coding.
        </span>
      </span>
    </div>
  );
}
