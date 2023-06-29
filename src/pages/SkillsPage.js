import HeaderText from "../components/HeaderText";
import SkillMeter from "../components/SkillMeter";
import styles from "../styles/pages/Skills.module.css";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

import { data } from "../data/skills";

export default function SkillsPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Skills" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {data.map((data) => {
                return (
                  <div className={styles.details}>
                    <div className={styles.category}>{data.category}</div>
                    <div className={styles.skillSection}>
                      {data.skills.map((skills) => {
                        return (
                          <Reveal width="100%">
                            <SkillMeter
                              logo={skills.logo}
                              skill={skills.skill}
                              rating={skills.rating}
                            />
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
