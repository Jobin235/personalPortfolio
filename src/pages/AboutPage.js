import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <HeaderText dataText="About"/>
    </div>
  );
}
