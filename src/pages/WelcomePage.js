import React, { useContext } from "react";
import Typed from "react-typed";
import WelcomeHero from "../components/WelcomeHero";
import styles from "../styles/pages/WelcomePage.module.css";

import { AppContext } from "../utils/context";

export default function WelcomePage() {

  const { setInitialRender} = useContext(AppContext)

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
          onClick={() => setInitialRender(false)}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
