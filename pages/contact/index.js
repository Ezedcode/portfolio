import React from "react";

import contact from "../../data/contact.json"

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import SendBtn from "../../components/button/SendBtn";

const Contact = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.form(e.currentTarget.elements);
  }

  return (
    <div className={`${styles.contact} ${page.pages}`}>
      <div>
        <h1>{contact.title}</h1>
        <p>{contact.content}</p>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <textarea placeholder="Message" />
        <SendBtn />
      </form>
    </div>
  );
};

export default Contact;
