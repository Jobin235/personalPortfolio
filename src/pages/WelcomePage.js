import React from "react";
import Typed from "react-typed";
import WelcomeHero from "../components/WelcomeHero";
import styles from "../styles/pages/WelcomePage.module.css";

export default function WelcomePage(props) {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <WelcomeHero />
      </div>

      <div className={styles.textContainer}>
        <p className={styles.smallHeadTyped}>
          <Typed strings={["Full-Stack Developer"]} typeSpeed={80} />
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => props.setInitialRender(false)}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
