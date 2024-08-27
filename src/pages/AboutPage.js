import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/AboutPage.module.css";

import hero from "../assets/images/hero.png";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="About" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <Reveal>
                  <h1 className={styles.name}>
                    <span style={{ color: "grey" }}>{">"}</span> JOBIN JOY,
                  </h1>
                </Reveal>

                <Reveal>
                  <h1 className={styles.designation}>
                    Creative Full-Stack Developer
                  </h1>
                </Reveal>

                <Reveal>
                  <p className={styles.detail}>
                    I'm an engineering graduate who has been working as a full
                    stack web developer since 2019. I enjoy tackling complex
                    problems with innovative solutions. With my proven remote
                    work experience and international client collaborations, I
                    am confident in my ability to deliver high-quality code that
                    meets and exceeds project requirements.
                  </p>
                </Reveal>
                <Reveal>
                  <p className={styles.detail}>
                    My repertoire includes Javascript and tools such as ReactJS,
                    NextJS, Express, NodeJS, MongoDB and more.
                  </p>
                </Reveal>

                <div className={styles.statusContainer}>
                  <Reveal>
                    <div className={styles.status}>
                      <span className={styles.experience}>5+ </span>
                      <p className={styles.text}>Years of experience</p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className={styles.status}>
                      <span className={styles.project}>14+ </span>
                      <p className={styles.text}>Projects Completed</p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className={styles.status}>
                      <div className={styles.clients}>5 </div>
                      <p className={styles.text}>Happy Clients</p>
                    </div>
                  </Reveal>
                </div>

                <div className={styles.buttonContainer}>
                  <a href="/files/Jobin_Joy_Resume.pdf" target="_blank" download>
                    <button className={styles.button}>Download Resume</button>
                  </a>
                </div>
              </div>

              <div className={styles.image}>
                <img className={styles.heroImage} src={hero} alt="work" />
                <div className={styles.nameCard}>Jobin Joy</div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
