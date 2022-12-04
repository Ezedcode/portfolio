import React, { useState } from "react";

import styles from "./styles.module.css";

const Grid = (props) => {
    const [activeGrid, setActiveGrid] = useState();

    const handleActive = () => {
        setTimeout(() => { setActiveGrid(false) }, 2 * 1000);
        setActiveGrid(true);
    }

    return (
        <div className={`${styles.grid} ${activeGrid ? styles.active : ""}`} onClick={handleActive}>
            <div className={styles.view}>View</div>
        </div >
    );
}


export default Grid;