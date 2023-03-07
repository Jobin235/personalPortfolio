import React from "react";
import Typed from "react-typed";
import WelcomeHero from "../components/WelcomeHero";
import styles from "../styles/WelcomePage.module.css";

export default function WelcomePage(props) {
  return (
    <div className={styles.container}>
      <WelcomeHero />

      <p className={styles.smallHeadTyped}>
        <Typed
          strings={[
            "Full-Stack Developer",
          ]}
          typeSpeed={80}
        />
      </p>

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
