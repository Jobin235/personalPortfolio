import React from "react";
import SideMenu from "../components/SideMenu";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideMenu className={styles.sidemenu}/>
      <main>{children}</main>
    </div>
  );
}
