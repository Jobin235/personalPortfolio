import React from "react";
import styles from "../styles/components/HeaderText.module.css";
import { motion } from "framer-motion";
export default function HeaderText(props) {
  const slideInText = {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 250,
      },
    },
    exit: { x: window.innerWidth },
  };

  return (
    <motion.h1
      className={styles.headerText}
      text={props.text}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInText}
    >
      {props.text}
    </motion.h1>
  );
}
