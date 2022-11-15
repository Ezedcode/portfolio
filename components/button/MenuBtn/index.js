import React, { useContext } from "react";
import GlobalVar from "../../../context/GlobalVar";
import styles from "./styles.module.css";

const MenuBtn = () => {
  const { menuBtn, setMenuBtn } = useContext(GlobalVar);

  const handleClick = () => {
    if (menuBtn) {
      setMenuBtn(false);
    } else {
      setMenuBtn(true);
    }
  };

  return (
    <button
      className={`${styles.menuBtn} ${menuBtn && styles.active}`}
      onClick={handleClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default MenuBtn;
