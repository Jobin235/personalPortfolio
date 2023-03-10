import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <HeaderText datatext="Contact"/>
    </div>
  );
}
