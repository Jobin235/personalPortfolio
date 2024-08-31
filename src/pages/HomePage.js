import React, { useContext, useEffect } from "react";
import { AppContext } from "../utils/context";

import Typed from "react-typed";
import WheelMenu from "../components/WheelMenu";
import styles from "../styles/pages/HomePage.module.css";
import hexagonImage from "../assets/images/hexagon.jpg";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>Jobin Joy - Full Stack Developer</title>
        <meta
          name="description"
          content="Creative Full-Stack Developer with 5+ Years of experience completing 14+ Projects and having 5+ Happy Clients"
        />
        <link rel="canonical" href="https://jobinjoy.in/" />
      </Helmet>
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
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div
          style={{
            textAlign: "center",
            display: "grid",
            placeSelf: "center",
          }}
        >
          {/* <p className={styles.smallHead}>I am</p> */}
          <p className={styles.largeHead}>JOBIN JOY</p>
          <p className={styles.smallHeadTyped}>
            <Typed
              strings={[
                "Full-Stack Developer",
                "Frontend Consultant",
                "Backend Developer",
                "Freelancer",
                "Web3 Enthusiast",
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
    </>
  );
}
