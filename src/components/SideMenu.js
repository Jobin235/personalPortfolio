import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../utils/context";

import { useNavigate } from "react-router-dom";

import styles from "../styles/components/SideMenu.module.css";
import back from "../assets/images/back.png";

import { motion } from "framer-motion";

import { data } from "../data/menu";

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
        <div className={styles.menu} onClick={() => navigate("/")}>
          <img src={back} className={styles.menuImage} alt="back" />
          <div className={styles.menuLabels}>Menu</div>
        </div>
        {data.map((data) => {
          return (
            <div
              id={currentMenu === data.menu ? styles.active : ""}
              className={styles.menu}
              onClick={() => handleMenuSelection(data.menu)}
            >
              <img
                src={data.image}
                className={styles.menuImage}
                alt={data.alt}
              />
              <div className={styles.menuLabels}>{data.label}</div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
