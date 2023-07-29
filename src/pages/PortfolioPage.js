import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Portfolio.module.css";

import PageTransition from "../components/PageTransition";

import { data } from "../data/portfolio";
import { PortfolioCard } from "../components/PortfolioCard";

export default function PortfolioPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Portfolio" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                {data.map((project) => {
                  return (
                    <React.Fragment key={project.projectName}>
                      <PortfolioCard data={project} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
