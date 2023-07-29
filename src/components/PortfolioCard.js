import React, { useEffect, useRef } from "react";
import styles from "../styles/components/PortfolioCard.module.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import github from "../assets/images/logos/github.png";

import { motion, useAnimation, useInView } from "framer-motion";

export const PortfolioCard = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });
  const animationControl = useAnimation();

  useEffect(
    () => {
      if (isInView) {
        animationControl.start("visible");
      }
    },
    // eslint-disable-next-line
    [isInView]
  );

  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        className={styles.imageContainer}
        variants={{
          initial: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={animationControl}
        transition={{ duration: 1.4, delay: 0.3 }}
      >
        <img
          src={data.projectImage}
          className={styles.projectImage}
          alt="logo"
        />
      </motion.div>
      <div className={styles.detailsContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImage}>
            <img src={data.companylogo} className={styles.logo} alt="logo" />
          </div>

          {data?.link ? (
            <Link
              className={styles.button}
              to={data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={styles.link}>Visit Site</p>
            </Link>
          ) : (
            ""
          )}
        </div>
        <Reveal>
          <p className={styles.projectName}>
            {data.projectName}
            <span
              id={
                data.projectType.includes("Freelance")
                  ? styles.freelance
                  : styles.company
              }
              className={styles.type}
            >
              {data.projectType}
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className={styles.description}>{data.description}</p>
        </Reveal>

        <div className={styles.techContainer}>
          <Reveal>
            <p className={styles.heading}>Technologies</p>
          </Reveal>
          <Reveal>
            <div className={styles.tagContainer}>
              {data.tech.map((tech) => {
                return (
                  <div key={tech} className={styles.tag}>
                    <p className={styles.tagText}>{tech}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
        <div className={styles.detailContainer}>
          {data.details.map((detail) => {
            return (
              <div className={styles.subContainers} key={detail.id}>
                <div className={styles.details}>
                  <Reveal>
                    <p className={styles.heading}>Duration</p>
                  </Reveal>
                  <Reveal>
                    <p className={styles.detail}>{detail.duration}</p>
                  </Reveal>
                </div>
                <div className={styles.details}>
                  <Reveal>
                    <p className={styles.heading}>Role</p>
                  </Reveal>
                  <Reveal>
                    <p className={styles.detail}>{detail.role}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.gitContainer}>
          <div className={styles.statusContainer}>
            <Reveal>
              <p className={styles.heading}>Current Status</p>
            </Reveal>
            <Reveal>
              <p
                id={
                  data?.status.includes("Offline")
                    ? styles.offline
                    : styles.online
                }
                className={styles.status}
              >
                {data.status}
              </p>
            </Reveal>
          </div>

          {data?.github ? (
            <Link
              className={styles.github}
              to={data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.gitImage}>
                <img className={styles.github} src={github} alt="github" />
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
