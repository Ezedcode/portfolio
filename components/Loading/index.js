import React from "react";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div>
        <div className={styles.first}></div>
        <div className={styles.secund}></div>
        <div className={styles.secund}></div>
        <div className={styles.first}></div>
      </div>
    </div>
  );
};

export default Loading;
