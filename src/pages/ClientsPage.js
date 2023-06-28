import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Client.module.css";

export default function ClientsPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Clients"/>
    </div>
  );
}
