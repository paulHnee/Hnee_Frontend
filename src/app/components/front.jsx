import styles from "../style";
import { Kontakt, Page, Zeiten } from "./index";
import React from "react";

const Front = () => (
  <div>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Page />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Zeiten />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Kontakt />
      </div>
    </div>
  </div>
);

export default Front;