import React from "react";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Contact.module.css";

import PageTransition from "../components/PageTransition";
// import Reveal from "../components/Reveal";
import {
  contactData,
  infoData,
  serviceData,
  budgetData,
} from "../data/contact";

import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <HeaderText text="Contact" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <div className={styles.contactSection}>
                  <p className={styles.mainhead}>Get in touch</p>
                  <p className={styles.subhead}>
                    Let's talk about your project
                  </p>
                  <p className={styles.subtitle}>
                    Thinking about a new project, a problem to solve, or just
                    want to connect? Let's do it!
                    <br />
                    <br />
                    <br />
                    Use the form on this page or get in touch by other means.
                  </p>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactsContainer}>
                      {contactData?.map((data) => {
                        return (
                          <div key={data.type} className={styles.contacts}>
                            <div className={styles.logoContainer}>
                              <img
                                className={styles.logo}
                                src={data.logo}
                                alt={data.alt}
                              />
                            </div>

                            {data.link ? (
                              <Link
                                to={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <p className={styles.detail}>
                                  {data.type} :{" "}
                                  <span id={styles.clickable}>
                                    {data.detail}
                                  </span>
                                </p>
                              </Link>
                            ) : (
                              <p className={styles.detail}>
                                {data.type} : {data.detail}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={styles.formSection}>
                  <form>
                    <p className={styles.heading}>Your contact information</p>
                    <div className={styles.infoContainer}>
                      {infoData?.map((data) => {
                        return (
                          <input
                            key={data.name}
                            type="text"
                            className={styles.info}
                            placeholder={data.placeholder}
                            name={data.name}
                            required
                          />
                        );
                      })}
                    </div>
                    <p className={styles.heading}>
                      What services do you need for your project?
                    </p>
                    <div className={styles.serviceContainer}>
                      {serviceData?.map((data) => {
                        return (
                          <div key={data.label} className={styles.serviceGroup}>
                            <input
                              type="checkbox"
                              name="services[]"
                              value={data.value}
                            />
                            <label className={styles.label}>{data.label}</label>
                          </div>
                        );
                      })}
                    </div>
                    <p className={styles.heading}>
                      How much is the anticipated budget?
                    </p>
                    <div className={styles.budgetContainer}>
                      {budgetData?.map((data) => {
                        return (
                          <div key={data} className={styles.radioGroup}>
                            <input type="radio" name="budget" required />
                            <label className={styles.label}>{data}</label>
                          </div>
                        );
                      })}
                    </div>
                    <p className={styles.heading}>Tell me about your project</p>
                    <div className={styles.descriptionContainer}>
                      <textarea
                        placeholder="Project description"
                        name="description"
                        rows="6"
                        required
                      />
                    </div>

                    <div className={styles.buttonContainer}>
                      <button className={styles.button} type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
