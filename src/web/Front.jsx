import styles from "../style";
import "../App.css";
import { Page, AboutMe, Zeiten } from "../web";

const Front = () => (
  <div>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Page />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutMe />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Zeiten />
      </div>
    </div>
  </div>
);

export default Front;
