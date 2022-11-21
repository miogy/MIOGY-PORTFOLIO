import ProjectCard from "../Main/about/ProjectCard";
import ToyProjectCard from "../Main/about/ToyProjectCard";
import styles from "../page.module.css";

function Developer({ project }) {
  return (
    <div className={styles.pageWrap}>
      <h2 className={styles.pageTitle}>Project</h2>
      <div className={styles.sectionWrap}>
        <ProjectCard />
      </div>
      <h2 className={styles.pageTitle}>Toy Project</h2>
      <div className={styles.sectionWrap}>
        <ToyProjectCard projectData={project} />
      </div>
    </div>
  );
}
export default Developer;
