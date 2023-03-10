import React from "react";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import SideMenu from "../components/SideMenu";
import styles from "../styles/components/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideMenu className={styles.sidemenu}/>
      <main>{children}</main>
      <ScrollUpButton />
    </div>
  );
}
