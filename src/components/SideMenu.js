import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../utils/context";

import { useNavigate } from "react-router-dom";

import styles from "../styles/components/SideMenu.module.css";

import about from "../assets/images/about.png";
import education from "../assets/images/education.png";
import skills from "../assets/images/skills.png";
import contact from "../assets/images/contact.png";
import portfolio from "../assets/images/portfolio.png";
import client from "../assets/images/client.png";
import work from "../assets/images/work.png";
import library from "../assets/images/library.png";
import back from "../assets/images/back.png";

import { motion } from "framer-motion";

export default function SideMenu() {
  const { currentMenu, setCurrentMenu, sideMenuRender, setSideMenuRender } =
    useContext(AppContext);

  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(
    () => {
      setSideMenuRender(true);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    let path = "/" + currentMenu;
    if (redirect) {
      navigate(path);
    }
    // eslint-disable-next-line
  }, [redirect]);

  const handleMenuSelection = (menu) => {
    setCurrentMenu(menu);
    setRedirect(true);
  };

  const slideInMenu = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={styles.menuContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={!sideMenuRender ? slideInMenu : ""}
    >
      <div className={styles.sideMenu}>
      <div
          className={styles.menu}
          onClick={() => navigate('/')}
        >
          <img src={back} className={styles.menuImage} alt="back" />
          <div className={styles.menuLabels}>Menu</div>
        </div>
        <div
          id={currentMenu === "About" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("About")}
        >
          <img src={about} className={styles.menuImage} alt="about" />
          <div className={styles.menuLabels}>About</div>
        </div>
        <div
          id={currentMenu === "Work" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Work")}
        >
          <img src={work} className={styles.menuImage} alt="work" />
          <div className={styles.menuLabels}>Work Experience </div>
        </div>
        <div
          id={currentMenu === "Skills" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Skills")}
        >
          <img src={skills} className={styles.menuImage} alt="skills" />
          <div className={styles.menuLabels}>Skills </div>
        </div>
        <div
          id={currentMenu === "Portfolio" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Portfolio")}
        >
          <img src={portfolio} className={styles.menuImage} alt="portfolio" />
          <div className={styles.menuLabels}>Portfolio </div>
        </div>
        <div
          id={currentMenu === "Contact" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Contact")}
        >
          <img src={contact} className={styles.menuImage} alt="contact" />
          <div className={styles.menuLabels}>Contact </div>
        </div>
        <div
          id={currentMenu === "Education" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Education")}
        >
          <img src={education} className={styles.menuImage} alt="education" />
          <div className={styles.menuLabels}>Education Timeline </div>
        </div>
        <div
          id={currentMenu === "Library" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Library")}
        >
          <img src={library} className={styles.menuImage} alt="library" />
          <div className={styles.menuLabels}>Libraries Used </div>
        </div>
        <div
          id={currentMenu === "Clients" ? styles.active : ""}
          className={styles.menu}
          onClick={() => handleMenuSelection("Clients")}
        >
          <img src={client} className={styles.menuImage} alt="client" />
          <div className={styles.menuLabels}>Clients </div>
        </div>
      </div>
    </motion.div>
  );
}
