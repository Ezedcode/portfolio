import React from "react";
import Link from "next/Link";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>E</div>
    </Link>
  );
};

export default Logo;
