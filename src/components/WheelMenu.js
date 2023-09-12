import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../utils/context";

import styles from "../styles/components/WheelMenu.module.css";

import about from "../assets/images/sidemenu/about.png";
import education from "../assets/images/sidemenu/education.png";
import skills from "../assets/images/sidemenu/skills.png";
import contact from "../assets/images/sidemenu/contact.png";
import portfolio from "../assets/images/sidemenu/portfolio.png";
import work from "../assets/images/sidemenu/work.png";

export default function WheelMenu() {
  const [hoveredMenu, setHoveredMenu] = useState("SELECT AN OPTION");
  const [redirect, setRedirect] = useState(false);
  const { currentMenu, setCurrentMenu } = useContext(AppContext);

  useEffect(() => {
    let path = "/" + currentMenu;
    if (redirect) {
      navigate(path);
    }
    // eslint-disable-next-line
  }, [redirect]);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu("SELECT AN OPTION");
  };

  const navigate = useNavigate();

  const handleMenuSelection = (menu) => {
    setCurrentMenu(menu);
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
          className={currentMenu === "Skills" ? styles.activeMenu : ""}
        >
          <path
            d="M 610 310 A 300 300 0 0 1 460 570 L 410.5 483 A 200 200 0 0 0 510 310 z "
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
          className={currentMenu === "About" ? styles.activeMenu : ""}
        >
          <path
            d="M 460 570 A 300 300 0 0 1 157 568 L 203 479 A 200 200 0 0 0 410.5 483 z "
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
          className={currentMenu === "Work" ? styles.activeMenu : ""}
        >
          <path
            d="M 157 568 A 300 300 0 0 1 10 310 L 110 310 A 200 200 0 0 0 203 479 z "
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
          className={currentMenu === "Portfolio" ? styles.activeMenu : ""}
        >
          <path
            d="M 10 310 A 300 300 0 0 1 158 51 L 203 141 A 200 200 0 0 0 110 310 z "
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
          className={currentMenu === "Education" ? styles.activeMenu : ""}
        >
          <path
            d="M 158 51 A 300 300 0 0 1 459 50 L 410.5 132 A 200 200 0 0 0 203 141 z "
            fill="rgba(255,255,255,0.3)"
          />
          <image href={education} className={styles.educationImage} />
        </g>

        <g
          filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))"
          onClickCapture={() => handleMenuSelection("Contact")}
          onMouseEnter={() => handleMouseEnter("CONTACT")}
          onMouseLeave={handleMouseLeave}
          data-menu="Contact"
          className={currentMenu === "Contact" ? styles.activeMenu : ""}
        >
          <path
            d="M 459 50 A 300 300 0 0 1 610 310 L 510 310 A 200 200 0 0 0 410.5 132 z"
            fill="rgba(255,255,255,0.3)"
          />
          <image href={contact} className={styles.contactImage} />
        </g>
      </svg>
    </React.Fragment>
  );
}
