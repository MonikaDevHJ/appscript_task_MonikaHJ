"use client";

import { useState } from "react";
import styles from "../../app/styles/Recomended.module.css";

export default function Recommended() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <span className={styles.itemsCount}>3425 ITEMS</span>
        <button className={styles.hideFilterBtn}>HIDE FILTER</button>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <button
          className={styles.dropdownButton}
          onClick={() => setOpen(!open)}
        >
          Recommended
          <span className={`${styles.arrow} ${open ? styles.open : ""}`}>▼</span>
        </button>

        {open && (
          <div className={styles.dropdownMenu}>
            <p>Recommended</p>
            <p>Newest First</p>
            <p>Popular</p>
            <p>Price: High to Low</p>
            <p>Price: Low to High</p>
          </div>
        )}
      </div>
    </div>
  );
}
