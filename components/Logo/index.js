import React from "react";
import Link from "next/Link";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <img src="./img/Logo.png" width={"35"} className={styles.logo}/>
    </Link>
  );
};

export default Logo;
