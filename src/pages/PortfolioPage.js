import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Portfolio.module.css";

import PageTransition from "../components/PageTransition";

import { data } from "../data/portfolio";
import { PortfolioCard } from "../components/PortfolioCard";
import { Helmet } from "react-helmet-async";

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Jobin Joy - Check out my projects</title>
        <meta
          name="description"
          content="See all projects by Jobin Joy - Full Stack Developer"
        />
        <link rel="canonical" href="https://jobinjoy.in/Portfolio" />
      </Helmet>
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
    </>
  );
}
