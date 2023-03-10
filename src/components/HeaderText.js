import React from 'react'
import styles from "../styles/components/HeaderText.module.css";
export default function HeaderText(props) {
  return (
    <h1 className={styles.headerText} dataText={props.dataText}>
        {props.dataText}
      </h1>
  )
}
