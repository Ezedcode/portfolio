import React from "react";

import contact from "../../data/contact.json"

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import SendBtn from "../../components/button/SendBtn";

const Contact = () => {
  return <div className={`${styles.contact} ${page.pages}`}>
    <div>
      <h1>{contact.title}</h1>
      <p>{contact.content}</p>
    </div>
    <form>
      <div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </div>
      <input type="subject" placeholder="Subject" />
      <textarea placeholder="Message" />
      <SendBtn />
    </form>
  </div>;
};

export default Contact;
