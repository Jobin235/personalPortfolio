import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/AboutPage.module.css";

import hero from "../assets/images/hero.png";
import PageTransition from "../components/PageTransition";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <HeaderText datatext="About" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <h1 className={styles.name}>
                  <span style={{ color: "grey" }}>{">"}</span> JOBIN JOY,
                </h1>

                <h1 className={styles.designation}>
                  Creative Full-Stack Developer
                </h1>

                <p className={styles.detail}>
                  An engineering graduate who have been working on web
                  development technologies since 2019 and is a self-motivated
                  and self-taught professional who likes to solve problems. I
                  merge a passion for usability and user experience with
                  technical knowledge to create cool digital experiences.
                </p>

                <p className={styles.detail}>
                  My repertoire includes Javascript and tools such as ReactJS,
                  NextJS, Express, NodeJS, MongoDB and more.
                </p>

                <div className={styles.statusContainer}>
                  <div className={styles.status}>
                    <span className={styles.experience}>4+ </span>
                    <p className={styles.text}>Years of experience</p>
                  </div>
                  <div className={styles.status}>
                    <span className={styles.project}>14+ </span>
                    <p className={styles.text}>Projects Completed</p>
                  </div>
                  <div className={styles.status}>
                    <div className={styles.clients}>5 </div>
                    <p className={styles.text}>Happy Clients</p>
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Download Resume</button>
                </div>
              </div>

              <div className={styles.image}>
                <img className={styles.heroImage} src={hero} alt="work" />
                <div className={styles.nameCard}>Jobin Joy</div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
