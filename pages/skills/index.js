import React, { useContext } from "react";

import skills from "../../data/skills.json";

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import GlobalVar from "../../context/GlobalVar";

const Skills = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(2);
  return (
    <div className={`${styles.skills} ${page.pages}`}>
      <div>
        <h1>{skills.Myself}</h1>
        <p>{skills.content.p1}</p>
        <p>{skills.content.p2}</p>
      </div>
      <div>
        <p>{skills.abilities.p3}</p>
        <ul>
          {skills.abilities.technologies.map((array, index) => (
            // eslint-disable-next-line react/jsx-key
            <li>{skills.abilities.technologies[index]}</li>))}
        </ul>
      </div>
    </div >
  );
};

export default Skills;
