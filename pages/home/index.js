import React from "react";

import home from "../../data/home.json";

import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div>
        <p>{home.greeting}</p>
        <h1>{home.title}</h1>
        <p>{home.about}</p>
      </div>
      <div>
        <div></div>
        <div>
          <img src="./img/ezedelio.png" alt="Ezedélio" width="250" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
