import React from 'react'

import Typed from "react-typed";
import WheelMenu from "../components/WheelMenu";
import WelcomePage from "../pages/WelcomePage";
import styles from "../styles/HomePage.module.css";

export default function HomePage(props) {

  return (
    <>
    {
      props.initialRender ? <WelcomePage setInitialRender = {props.setInitialRender}/>:
      <div
        style={{ display: "grid", placeItems: "center", paddingTop: "20px" }}
      >
        <div style={{ textAlign: "center" }}>
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
    }
    </>
  )
}
