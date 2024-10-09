import styles from "../style";
import Page from "../components/page"; // Ensure the correct import path
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
        {/* Add content here */}
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Add content here */}
      </div>
    </div>
  </div>
);

export default Front;