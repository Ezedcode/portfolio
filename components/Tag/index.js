import React from "react";
import styles from "./styles.module.css";

const Tag = (props) => {
  const location = window.location.href.toString();

  const pagesUrl = [
    "http://localhost:3000/",
    "http://localhost:3000/skills",
    "http://localhost:3000/project",
    "http://localhost:3000/contact"
  ];

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
