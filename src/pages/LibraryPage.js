import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Library.module.css";

export default function LibraryPage() {
  return (
    <div className={styles.container}>
      <HeaderText datatext="Libraries Used"/>
    </div>
  );
}
