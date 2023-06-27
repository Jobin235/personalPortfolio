import React, { useContext } from "react";
import styles from "../styles/utils/MenuButton.module.css";
import { AppContext } from "../utils/context";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import back from "../assets/images/back.png";

export default function MenuButton() {
  const { sideMenuRender } = useContext(AppContext);
  const navigate = useNavigate();

  const slideInMenu = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={styles.container}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={!sideMenuRender ? slideInMenu : ""}
    >
      <div className={styles.menu} onClick={() => navigate("/")}>
        <div className={styles.imageContainer}>
          <img src={back} className={styles.menuImage} alt="menu" />
        </div>
      </div>
    </motion.div>
  );
}
