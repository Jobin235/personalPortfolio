import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Client.module.css";

import PageTransition from "../components/PageTransition";
import { data } from "../data/clients";

import Reveal from "../components/Reveal";

export default function ClientsPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Clients" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <div className={styles.subText}>
                  Some of the brands I have worked with
                </div>
                <div className={styles.clients}>
                  {data.map((client) => {
                    return (
                      <React.Fragment key={client.name}>
                        <Reveal>
                          <div className={styles.imageContainer}>
                            <img
                              className={styles.image}
                              src={client.logo}
                              alt={client.name}
                            />
                          </div>
                        </Reveal>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
