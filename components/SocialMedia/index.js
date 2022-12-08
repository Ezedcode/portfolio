import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./styles.module.css";

const SocialMedia = () => {

    return (
        <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/ezed%C3%A9lio-garcia-61a9b622a/" target="_blank" rel="noreferrer" >
                <FaLinkedin />
            </a>
            <a href="https://github.com/Ezedcode" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
        </div>
    );
}

export default SocialMedia;