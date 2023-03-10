import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/AboutPage.module.css";

import hero from "../assets/images/hero.png";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <HeaderText datatext="About" />
      <div className={styles.content}>
        <div className={styles.card}>
        <div className={styles.cardContent}>
        <div className={styles.details}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            consequatur pariatur voluptas et inventore commodi. Ex cumque,
            recusandae numquam fuga commodi atque, dicta facere harum veritatis
            sunt nesciunt beatae amet?
          </div>

          <div className={styles.image}>
            <img className={styles.heroImage} src={hero} alt="work"/>
            <div className={styles.nameCard}>Jobin Joy</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
