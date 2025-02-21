import React from "react";
import styles from "../style";

const About = () => {
  return (
    <layout>
      <section id="about" className="flex-col py-16">
        <div className={`${styles.boxWidth} container mx-auto px-4 lg:px-8`}>
          <div className="flex flex-col items-center justify-between">
            Die Zentrale IT ist die Einrichtung für Angelegenheiten der Hochschul IT an der HNEE.
          </div>
        </div>
      </section>
    </layout>
  );
};

export default About;