import React from "react";
import styles from "../styles/components/WelcomeHero.module.css";
import hero from "../assets/images/hero.png";

export default function WelcomeHero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.gradientContainer}>
          <div className={styles.gradientCircle}></div>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={hero} alt="hero" draggable='false'/>
        </div>

        <div className={styles.nameContainer}>
          <p>JOBIN JOY</p>
        </div>
      </div>
    </div>
  );
}
