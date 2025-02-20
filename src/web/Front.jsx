import styles from "../style";
import "../App.css";
import { Page, About } from "../web";

const Front = () => (
  <div>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Page />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>
  </div>
);

export default Front;
