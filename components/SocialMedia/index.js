import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/Link";

import styles from "./styles.module.css";

const SocialMedia = () => {

    return (
        <div className={styles.socialMedia}>
            <Link href="https://www.linkedin.com/in/ezed%C3%A9lio-garcia-61a9b622a/" target="_blank">
                <FaLinkedin />
            </Link>
            <Link href="https://github.com/Ezedcode" target="_blank">
                <FaGithub />
            </Link>
        </div>
    );
}

export default SocialMedia;