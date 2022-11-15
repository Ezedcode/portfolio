import React from "react";
import Link from "next/Link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="./img/logo.png" alt="logo" width="150" />
    </Link>
  );
};

export default Logo;
