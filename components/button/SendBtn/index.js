import React from "react";

import styles from "./styles.module.css";

const SendBtn = () => {
    return (
        <button className={styles.sendBtn}>
            <a href="mailto:ezedeliogarcia@gmail.com">Send message!</a>
        </button>
    );
}

export default SendBtn;