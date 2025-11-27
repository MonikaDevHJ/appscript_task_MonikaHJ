"use client";

import { useState } from "react";
import styles from "../../app/styles/Recomended.module.css";

export default function Recommended({ onSort }: { onSort: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const sortingOptions = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: High to Low",
    "Price: Low to High",
  ];

  function handleSelect(option: string) {
    setSelectedSort(option);
    setOpen(false);
    onSort(option); // 🔥 send sorting to parent
  }

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
          {selectedSort}
          <span className={`${styles.arrow} ${open ? styles.open : ""}`}>▼</span>
        </button>

        {open && (
          <div className={styles.dropdownMenu}>
            {sortingOptions.map((option, i) => (
              <p key={i} onClick={() => handleSelect(option)}>
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
