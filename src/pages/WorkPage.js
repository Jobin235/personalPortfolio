import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Work.module.css";

import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { data } from "../data/experience";

export default function WorkPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Work Experience" />
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
                            id={styles.designation}
                          >
                            {data.designation}
                          </h3>
                        </Reveal>
                        <Reveal>
                          <h4
                            id={styles.company}
                            className="vertical-timeline-element-subtitle"
                          >
                            {data.company}
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
