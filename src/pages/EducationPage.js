import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Education.module.css";

import PageTransition from "../components/PageTransition";

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
                        iconStyle={{
                          background: "rgb(24, 24, 27)",
                          color: "#fff",
                        }}
                        // icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {data.designation}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {data.company}
                        </h4>
                        <p>{data.description}</p>
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
