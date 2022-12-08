import React, { useContext } from "react";
import Link from "next/Link";
import GlobalVar from "../../context/GlobalVar";

import styles from "./styles.module.css";
import Tag from "../Tag";

const NavBar = () => {
  const { menuBtn, setMenuBtn, statusPage } = useContext(GlobalVar);

  const page = [true, false, false, false];

  page.forEach((element, index) => {
    if ((index + 1) === statusPage) {
      page[index] = true;
    } else {
      page[index] = false;
    }
  });

  return (
    <nav className={`${styles.nav} ${menuBtn && styles.active}`}>
      <Link href="/">
        <div
          onClick={() => {
            setMenuBtn(false);
          }}
        >
          <Tag page="Home" active={page[0]} />
        </div>
      </Link>
      <Link href="/skills">
        <div
          onClick={() => {
            setMenuBtn(false);
          }}
        >
          <Tag page="Skills" active={page[1]} />
        </div>
      </Link>
      <Link href="/project">
        <div
          onClick={() => {
            setMenuBtn(false);
          }}
        >
          <Tag page="Projects" active={page[2]} />
        </div>
      </Link>
      <Link href="/contact">
        <div
          onClick={() => {
            setMenuBtn(false);
          }}
        >
          <Tag page="Contact" active={page[3]} />
        </div>
      </Link>
      <Link href="">
        <span className={styles.resume}>
          Resume
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
