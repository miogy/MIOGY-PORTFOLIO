import styles from "../page.module.css";

import DesignSkill from "../Main/about/DesignSkill";
import Workexperience from "../Main/about/Workexperience";
import TechStack from "../Main/about/TechStack";

function Info() {
  return (
    <div className={styles.pageWrap}>
      <h2 className={styles.pageTitle}>TechStack</h2>
      <div className={styles.pageContents}>
        <TechStack />
      </div>
      <h2 className={styles.pageTitle}>DesignSkill</h2>
      <div className={styles.pageContents}>
        <DesignSkill />
      </div>
      <h2 className={styles.pageTitle}>Workexperience</h2>
      <div className={styles.pageContents}>
        <Workexperience />
      </div>
    </div>
  );
}
export default Info;
