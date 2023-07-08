import React, { useContext, useEffect } from "react";
import { AppContext } from "../utils/context";

import Typed from "react-typed";
import WheelMenu from "../components/WheelMenu";
import styles from "../styles/pages/HomePage.module.css";
import hexagonImage from "../assets/images/hexagon.jpg";

import { motion } from "framer-motion";

export default function HomePage() {
  const { setSideMenuRender } = useContext(AppContext);

  useEffect(
    () => {
      setSideMenuRender(false);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <motion.div
      style={{
        display: "grid",
        minHeight: "100vh",
        background: `url(${hexagonImage}) no-repeat center center`,
        backgroundColor: "rgb(32 33 30)",
        backgroundBlendMode: "luminosity",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        style={{
          textAlign: "center",
          display: "grid",
          placeSelf: "center",
        }}
      >
        <p className={styles.smallHead}>I'm</p>
        <p className={styles.largeHead}>JOBIN JOY</p>
        <p className={styles.smallHeadTyped}>
          <Typed
            strings={[
              "Freelancer",
              "Full-Stack Developer",
              "React Developer",
              "Crypto Enthusiast",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
      </div>

      <div className={styles.wheelSvg}>
        <WheelMenu></WheelMenu>
      </div>
    </motion.div>
  );
}
