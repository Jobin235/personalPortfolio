import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Work.module.css";

import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

export default function WorkPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Work Experience" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <Reveal>
                  <h1 className={styles.name}>
                    <span style={{ color: "grey" }}>{">"}</span> JOBIN JOY,
                  </h1>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
