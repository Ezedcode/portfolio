import React, { useContext, useState } from "react";
import Link from "next/Link";
import GlobalVar from "../../context/GlobalVar";

import styles from "./styles.module.css";
import Tag from "../Tag";

const NavBar = () => {
  const { menuBtn, setMenuBtn } = useContext(GlobalVar);

  const [page, setHomePage] = useState([true, false, false, false]);

  return (
    <nav className={`${styles.nav} ${menuBtn && styles.active}`}>
      <Link href="/">
        <div
          onClick={() => {
            setHomePage([true, false, false, false]);
            setMenuBtn(false);
          }}
        >
          <Tag page="Home" active={page[0]} />
        </div>
      </Link>
      <Link href="/skills">
        <div
          onClick={() => {
            setHomePage([false, true, false, false]);
            setMenuBtn(false);
          }}
        >
          <Tag page="Skills" active={page[1]} />
        </div>
      </Link>
      <Link href="/project">
        <div
          onClick={() => {
            setHomePage([false, false, true, false]);
            setMenuBtn(false);
          }}
        >
          <Tag page="Projects" active={page[2]} />
        </div>
      </Link>
      <Link href="/contact">
        <div
          onClick={() => {
            setHomePage([false, false, false, true]);
            setMenuBtn(false);
          }}
        >
          <Tag page="Contact" active={page[3]} />
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
