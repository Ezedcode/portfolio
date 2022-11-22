import React from "react";

import contact from "../../data/contact.json"

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import SendBtn from "../../components/button/SendBtn";

const Contact = () => {

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field) return;

      formData[field.name] = field.value;
    })

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })

    console.log(formData);
  }

  return (
    <div className={`${styles.contact} ${page.pages}`}>
      <div>
        <h1>{contact.title}</h1>
        <p>{contact.content}</p>
      </div>
      <form method="post" onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />

        <textarea placeholder="Message" name="message" />
        <SendBtn />
      </form>
    </div>
  );
};

export default Contact;
