import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import HeaderText from "../components/HeaderText";
import styles from "../styles/pages/Contact.module.css";

import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import {
  contactData,
  infoData,
  serviceData,
  budgetData,
} from "../data/contact";

export default function ContactPage() {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is  required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    country: Yup.string().required("Country Name is required"),
    services: Yup.array().min(
      1,
      "You must select atleast one service category"
    ),
    budget: Yup.string().required("Please specify your anticipated budget"),
    description: Yup.string().required("Please provide a short description"),
  });

  const handleSubmit = ({ ...values }, helpers) => {
    console.log("values", values);
    toast.success("Email sent successfully!", { theme: "dark" });
    toast.error("Something went wrong. Try again!", { theme: "dark" });
    helpers.resetForm();
  };

  return (
    <div className={styles.container}>
      <HeaderText text="Contact" />
      <PageTransition>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <div className={styles.contactSection}>
                  <Reveal>
                    <p className={styles.mainhead}>Get in touch</p>
                  </Reveal>
                  <Reveal>
                    <p className={styles.subhead}>
                      Let's talk about your project
                    </p>
                  </Reveal>
                  <Reveal>
                    <p className={styles.subtitle}>
                      <span>
                        Thinking about a new project, a problem to solve, or
                        just want to connect? Let's do it!
                      </span>

                      <br />
                      <br />
                      <span>
                        Use the form on this page or get in touch by other
                        means.
                      </span>
                    </p>
                  </Reveal>

                  <div className={styles.contactDetails}>
                    <div className={styles.contactsContainer}>
                      {contactData?.map((data) => {
                        return (
                          <div key={data.type} className={styles.contacts}>
                            <Reveal>
                              <div className={styles.logoContainer}>
                                <img
                                  className={styles.logo}
                                  src={data.logo}
                                  alt={data.alt}
                                />
                              </div>
                            </Reveal>

                            {data.link ? (
                              <Link
                                className={styles.linkText}
                                to={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Reveal>
                                  <p className={styles.detail}>
                                    {data.type} :{" "}
                                    <span id={styles.clickable}>
                                      {data.detail}
                                    </span>
                                  </p>
                                </Reveal>
                              </Link>
                            ) : (
                              <Reveal>
                                <p className={styles.detail}>
                                  {data.type} : {data.detail}
                                </p>
                              </Reveal>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <motion.div
                  className={styles.formSection}
                  variants={{
                    initial: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  animate="visible"
                  transition={{ duration: 1.4, delay: 0.3 }}
                >
                  <Formik
                    initialValues={{
                      first_name: "",
                      last_name: "",
                      email: "",
                      company: "",
                      phone: "",
                      country: "",
                      services: [],
                      budget: "",
                      description: "",
                    }}
                    onSubmit={async (values, helpers) => {
                      handleSubmit(values, helpers);
                    }}
                    validationSchema={validationSchema}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      isValid,
                      dirty,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                    }) => {
                      return (
                        <form noValidate onSubmit={handleSubmit}>
                          <p className={styles.heading}>
                            Your contact information
                          </p>
                          <div className={styles.infoContainer}>
                            {infoData?.map((data) => {
                              return (
                                <div key={data.name}>
                                  <input
                                    value={values[data.name]}
                                    type={data.type}
                                    className={styles.info}
                                    placeholder={data.placeholder}
                                    name={data.name}
                                    maxLength={50}
                                    onChange={handleChange(data.name)}
                                    onBlur={handleBlur(data.name)}
                                  />
                                  <div
                                    id={styles.textType}
                                    className={styles.error}
                                  >
                                    {touched[data.name] && errors[data.name]}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <p className={styles.heading}>
                            What services do you need for your project?
                          </p>
                          <div className={styles.serviceContainer}>
                            {serviceData?.map((data) => {
                              return (
                                <div key={data.label}>
                                  <div className={styles.serviceGroup}>
                                    <input
                                      type="checkbox"
                                      checked={
                                        values["services"].includes(data.value)
                                          ? true
                                          : false
                                      }
                                      name="services"
                                      value={data.value}
                                      onChange={handleChange("services")}
                                      onBlur={handleBlur("services")}
                                    />
                                    <label className={styles.label}>
                                      {data.label}
                                    </label>
                                  </div>
                                </div>
                              );
                            })}
                            <div id={styles.fullWidth} className={styles.error}>
                              {touched["services"] && errors["services"]}
                            </div>
                          </div>
                          <p className={styles.heading}>
                            How much is the anticipated budget?
                          </p>
                          <div className={styles.budgetContainer}>
                            {budgetData?.map((data) => {
                              return (
                                <div key={data} className={styles.radioGroup}>
                                  <input
                                    type="radio"
                                    name="budget"
                                    checked={
                                      values["budget"] === data ? true : false
                                    }
                                    value={data}
                                    onChange={handleChange("budget")}
                                    onBlur={handleBlur("budget")}
                                  />
                                  <label className={styles.label}>{data}</label>
                                </div>
                              );
                            })}
                            <div id={styles.fullWidth} className={styles.error}>
                              {touched["budget"] && errors["budget"]}
                            </div>
                          </div>
                          <p className={styles.heading}>
                            Tell me about your project
                          </p>
                          <div className={styles.descriptionContainer}>
                            <textarea
                              placeholder="Project description (max: 750 characters)"
                              name="description"
                              rows="6"
                              value={values["description"]}
                              maxLength={750}
                              onChange={handleChange("description")}
                              onBlur={handleBlur("description")}
                            />
                            <div
                              id={styles.description}
                              className={styles.error}
                            >
                              {touched["description"] && errors["description"]}
                            </div>
                          </div>

                          <div className={styles.buttonContainer}>
                            <button
                              className={styles.button}
                              type="submit"
                              disabled={!(isValid && dirty)}
                            >
                              {!(isValid && dirty) ? "Complete Form" : "Submit"}
                            </button>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
