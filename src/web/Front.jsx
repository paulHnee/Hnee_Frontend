import styles from "../style";
import "../App.css";
import { Page, AboutMe, Portfolio } from "../web";

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
        <Portfolio />
      </div>
    </div>
  </div>
);

export default Front;
