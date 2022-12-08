import React, { useContext } from "react";

import contact from "../../data/contact.json"

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import SendBtn from "../../components/button/SendBtn";
import GlobalVar from "../../context/GlobalVar";

const Contact = () => {
  const { setStatusPage } = useContext(GlobalVar);

  setStatusPage(4);
  return (
    <div className={`${styles.contact} ${page.pages}`}>
      <div>
        <h1>{contact.title}</h1>
        <p>{contact.content}</p>
      </div>
      <div>
        <SendBtn />
      </div>
    </div>
  );
};

export default Contact;
