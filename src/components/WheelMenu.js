import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/components/WheelMenu.module.css";

import about from "../assets/images/about.png";
import education from "../assets/images/education.png";
import skills from "../assets/images/skills.png";
import contact from "../assets/images/contact.png";
import portfolio from "../assets/images/portfolio.png";
import client from "../assets/images/client.png";
import work from "../assets/images/work.png";
import library from "../assets/images/library.png";

import gunClick from "../assets/audio/gunClick.mp3";
const audio = new Audio(gunClick);

export default function WheelMenu(props) {
  const [hoveredMenu, setHoveredMenu] = useState("SELECT AN OPTION");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let path = "/" + props.currentMenu;
    if (redirect) {
      navigate(path, {currentMenu:props.currentMenu, setCurrentMenu: props.setCurrentMenu});
    }
    // eslint-disable-next-line
  }, [redirect]);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
    audio.muted = false;
    audio.play();
  };

  const handleMouseLeave = () => {
    setHoveredMenu("SELECT AN OPTION");
    audio.muted = true;
  };

  const navigate = useNavigate();

  const handleMenuSelection = (menu) => {
    props.setCurrentMenu(menu);
    setRedirect(true);
  };

  return (
    <React.Fragment>
      <svg height="620" width="620" viewBox="0 0 620 620">
        <text
          textAnchor="middle"
          alignmentBaseline="middle"
          id={styles.hoveredMenuName}
          x="175"
          y="400"
          fontSize="18"
          stroke="none"
        >
          {hoveredMenu}
        </text>
        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Skills")}
          onMouseEnter={() => handleMouseEnter("SKILLS")}
          onMouseLeave={handleMouseLeave}
          data-menu="Skills"
          className={props.currentMenu === "Skills" ? styles.activeMenu : ""}
        >
          <path
            d="M 610 310 A 300 300 0 0 1 522.1320343559643 522.1320343559643  L 451.4213562373095 451.4213562373095 A 200 200 0 0 0 510 310  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={skills} className={styles.skillsImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("About")}
          onMouseEnter={() => handleMouseEnter("ABOUT")}
          onMouseLeave={handleMouseLeave}
          data-menu="About"
          className={props.currentMenu === "About" ? styles.activeMenu : ""}
        >
          <path
            d="M 522.1320343559643 522.1320343559643 A 300 300 0 0 1 310 610  L 310 510 A 200 200 0 0 0 451.4213562373095 451.4213562373095  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={about} className={styles.aboutImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Work")}
          onMouseEnter={() => handleMouseEnter("WORK EXPERIENCE")}
          onMouseLeave={handleMouseLeave}
          data-menu="Work Experience"
          className={props.currentMenu === "Work" ? styles.activeMenu : ""}
        >
          <path
            d="M 310 610 A 300 300 0 0 1 97.86796564403576 522.1320343559643  L 168.57864376269052 451.4213562373095 A 200 200 0 0 0 310 510  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={work} className={styles.experienceImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Portfolio")}
          onMouseEnter={() => handleMouseEnter("PORTFOLIO")}
          onMouseLeave={handleMouseLeave}
          data-menu="Portfolio"
          className={props.currentMenu === "Portfolio" ? styles.activeMenu : ""}
        >
          <path
            d="M 97.86796564403576 522.1320343559643 A 300 300 0 0 1 10 310.00000000000006  L 110 310 A 200 200 0 0 0 168.57864376269052 451.4213562373095  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={portfolio} className={styles.portfolioImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Education")}
          onMouseEnter={() => handleMouseEnter("EDUCATION TIMELINE")}
          onMouseLeave={handleMouseLeave}
          data-menu="Education Timeline"
          className={props.currentMenu === "Education" ? styles.activeMenu : ""}
        >
          <path
            d="M 10 310.00000000000006 A 300 300 0 0 1 97.8679656440357 97.86796564403576  L 168.57864376269046 168.57864376269052 A 200 200 0 0 0 110 310  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={education} className={styles.educationImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Clients")}
          onMouseEnter={() => handleMouseEnter("CLIENTS")}
          onMouseLeave={handleMouseLeave}
          data-menu="Clients"
          className={props.currentMenu === "Clients" ? styles.activeMenu : ""}
        >
          <path
            d="M 97.8679656440357 97.86796564403576 A 300 300 0 0 1 309.99999999999994 10  L 309.99999999999994 110 A 200 200 0 0 0 168.57864376269046 168.57864376269052  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={client} className={styles.clientImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Library")}
          onMouseEnter={() => handleMouseEnter("LIBRARIES USED")}
          onMouseLeave={handleMouseLeave}
          data-menu="Libraries Used"
          className={props.currentMenu === "Library" ? styles.activeMenu : ""}
        >
          <path
            d="M 309.99999999999994 10 A 300 300 0 0 1 522.1320343559642 97.8679656440357  L 451.4213562373095 168.57864376269046 A 200 200 0 0 0 309.99999999999994 110  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={library} className={styles.libraryImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Contact")}
          onMouseEnter={() => handleMouseEnter("CONTACT")}
          onMouseLeave={handleMouseLeave}
          data-menu="Contact"
          className={props.currentMenu === "Contact" ? styles.activeMenu : ""}
        >
          <path
            d="M 522.1320343559642 97.8679656440357 A 300 300 0 0 1 610 309.99999999999994  L 510 309.99999999999994 A 200 200 0 0 0 451.4213562373095 168.57864376269046  z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={contact} className={styles.contactImage} />
        </g>
      </svg>
    </React.Fragment>
  );
}
