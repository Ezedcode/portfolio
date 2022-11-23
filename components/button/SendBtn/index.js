import React from "react";

import Link from "next/link";

import styles from "./styles.module.css";

const SendBtn = () => {
    return (
        <button className={styles.sendBtn}>
            <Link href="mailto:ezedeliogarcia@gmail.com">Send message!</Link>
        </button>
    );
}

export default SendBtn;