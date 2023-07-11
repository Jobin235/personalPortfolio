import React from "react";
import styles from "../styles/components/PortfolioCard.module.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export const PortfolioCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={data.projectImage}
          className={styles.projectImage}
          alt="logo"
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImage}>
            <img src={data.companylogo} className={styles.logo} alt="logo" />
          </div>

          {data?.link ? (
            <Link className={styles.button} to={data.link}>
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
      </div>
    </div>
  );
};
