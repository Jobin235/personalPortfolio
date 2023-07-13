import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Contact.module.css";

import PageTransition from "../components/PageTransition";
// import Reveal from "../components/Reveal";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Contact" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                hi
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
