import About from "../Main/about/About";
import styles from "../page.module.css";

function Info({ project }) {
  return (
    <div className={styles.pageWrap}>
      <h2 className={styles.pageTitle}>ABOUT</h2>
      <div>
        <About projectData={project} />
      </div>
    </div>
  );
}
export default Info;
