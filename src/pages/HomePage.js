import React from "react";

import Typed from "react-typed";
import WheelMenu from "../components/WheelMenu";
import WelcomePage from "../pages/WelcomePage";
import styles from "../styles/pages/HomePage.module.css";
import backgroundImage from '../assets/images/background.jpg'

export default function HomePage(props) {
  return (
    <>
      {props.initialRender ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(43, 39, 39)",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <WelcomePage setInitialRender={props.setInitialRender} />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            minHeight: "100vh",
            background: `url(${backgroundImage}) no-repeat center center`,
            backgroundColor: "rgb(32 33 30)",
            backgroundBlendMode: "luminosity",
            backgroundSize: "cover",
          }}
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
            <WheelMenu
              currentMenu={props.currentMenu}
              setCurrentMenu={props.setCurrentMenu}
            ></WheelMenu>
          </div>
        </div>
      )}
    </>
  );
}
