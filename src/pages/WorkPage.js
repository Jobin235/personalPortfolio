import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Work.module.css";

export default function WorkPage() {
  return (
    <div className={styles.container}>
      <HeaderText dataText="Work Experience"/>
    </div>
  );
}
