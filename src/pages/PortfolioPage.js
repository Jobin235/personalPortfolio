import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Portfolio.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.container}>
      <HeaderText dataText="Portfolio"/>
    </div>
  );
}
