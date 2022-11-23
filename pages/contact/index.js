import React from "react";

import contact from "../../data/contact.json"

import styles from "./styles.module.css";
import page from "../../styles/pages.module.css"
import SendBtn from "../../components/button/SendBtn";

const Contact = () => {
  const formData = {};

  async function handleOnSubmit(e) {
    e.preventDefault();

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field) return;

      formData[field.name] = field.value;
    })

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
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
        <input type="text" placeholder="Subject" name="subject" />

        <textarea placeholder="Message" name="message" />
        <SendBtn />
      </form>
    </div>
  );
};

export default Contact;
