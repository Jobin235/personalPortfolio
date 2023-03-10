import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Education.module.css";

export default function EducationPage() {
  return (
    <div className={styles.container}>
      <HeaderText datatext="Education Timeline"/>
    </div>
  );
}
