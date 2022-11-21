import React from "react";
import MenuBtn from "../button/MenuBtn";
import Logo from "../Logo";
import NavBar from "../NavBar";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <MenuBtn />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
