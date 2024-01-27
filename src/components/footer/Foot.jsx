import styles from "../../styles/foot.module.css";

export default function Foot() {
  return (
    <div>
      <span className={styles.footer}>
      <span><p>Author: Hege Refsnes</p>
      <p><a href="mailto:hege@example.com">hege@example.com</a></p></span>
      </span>
      
    </div>
  );
}
