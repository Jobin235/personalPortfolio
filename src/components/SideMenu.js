import React from "react";
import styles from "../styles/components/SideMenu.module.css";

import about from "../assets/images/about.png";
import education from "../assets/images/education.png";
import skills from "../assets/images/skills.png";
import contact from "../assets/images/contact.png";
import portfolio from "../assets/images/portfolio.png";
import client from "../assets/images/client.png";
import work from "../assets/images/work.png";
import library from "../assets/images/library.png";

export default function SideMenu( ) {

  return (
    <div className={styles.menuContainer}>
      <div className={styles.sideMenu}>
        <div id={styles.active} className={styles.menu} >
          <img src={about} className={styles.menuImage} alt="about" />
          <div className={styles.menuLabels}>About</div>
        </div>
        <div className={styles.menu}>
          <img src={work} className={styles.menuImage} alt="work" />
          <div className={styles.menuLabels}>Work Experience </div>
        </div>
        <div className={styles.menu}>
          <img src={skills} className={styles.menuImage} alt="skills" />
          <div className={styles.menuLabels}>Skills </div>
        </div>
        <div className={styles.menu}>
          <img src={portfolio} className={styles.menuImage} alt="portfolio" />
          <div className={styles.menuLabels}>Portfolio </div>
        </div>
        <div className={styles.menu}>
          <img src={contact} className={styles.menuImage} alt="contact" />
          <div className={styles.menuLabels}>Contact </div>
        </div>
        <div className={styles.menu}>
          <img src={education} className={styles.menuImage} alt="education" />
          <div className={styles.menuLabels}>Education Timeline </div>
        </div>
        <div className={styles.menu}>
          <img src={library} className={styles.menuImage} alt="library" />
          <div className={styles.menuLabels}>Libraries Used </div>
        </div>
        <div className={styles.menu}>
          <img src={client} className={styles.menuImage} alt="client" />
          <div className={styles.menuLabels}>Clients </div>
        </div>
      </div>
    </div>
  );
}
