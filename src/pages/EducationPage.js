import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Education.module.css";

import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { data } from "../data/education";

export default function EducationPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Education Timeline" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <VerticalTimeline>
                  {data.map((data) => {
                    return (
                      <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{
                          background: "rgb(38, 38, 41)",
                          color: "#fff",
                        }}
                        contentArrowStyle={{
                          borderRight: "7px solid  rgb(38, 38, 41)",
                        }}
                        date={data.duration}
                        dateClassName={styles.date}
                        iconStyle={{
                          background: "rgb(24, 24, 27)",
                          color: "#fff",
                        }}
                        // icon={<WorkIcon />}
                      >
                        <Reveal>
                          <h3
                            className="vertical-timeline-element-title"
                            id={styles.education}
                          >
                            {data.education}
                          </h3>
                        </Reveal>
                        <Reveal>
                          <h4
                            id={styles.institute}
                            className="vertical-timeline-element-subtitle"
                          >
                            {data.institute}
                          </h4>
                        </Reveal>
                        <Reveal>
                          <p id={styles.description}>{data.description}</p>
                        </Reveal>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
