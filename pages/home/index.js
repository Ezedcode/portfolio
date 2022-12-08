import React, { useContext } from "react";

import home from "../../data/home.json";
import GlobalVar from "../../context/GlobalVar";

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"

const HomePage = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(1);

  return (
    <div className={`${styles.home} ${page.pages}`}>
      <div>
        <p>{home.greeting}👋</p>
        <h1>{home.title}</h1>
        <p>{home.about}</p>
      </div>
      <div>
        <div></div>
        <div>
          {// eslint-disable-next-line @next/next/no-img-element
            <img src="./img/ezedelio.png" alt="Ezedélio" />}
        </div>
        <div></div>
      </div>
    </div >
  );
};

export default HomePage;
