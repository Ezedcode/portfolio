import React from "react";
import styles from "./styles.module.css";

const Tag = (props) => {
  return (
    <div className={`${styles.tag} ${props.active && styles.active}`}>
      <span>{"<"}</span>
      {props.page}
      <span>{"/"}</span>
      <span>{">"}</span>
    </div>
  );
};

export default Tag;
