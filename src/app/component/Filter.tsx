"use client";
import { useState } from "react";
import styles from "../styles/Filter.module.css";

export default function Filter() {
  // which dropdown is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // selected checkbox values
  const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

  // custom checkbox state
  const [customizable, setCustomizable] = useState(false);

  const filters = [
    { title: "IDEAL FOR", options: ["Men", "Women", "All"] },
    { title: "OCCASION", options: ["Work", "Casual", "Party"] },
    { title: "FABRIC", options: ["Cotton", "Leather", "Nylon"] },
    { title: "SEGMENT", options: ["Premium", "Standard"] },
    { title: "SUITABLE FOR", options: ["Adults", "Kids", "All"] },
  ];

  // checkbox toggle for dropdown filters
  const toggleOption = (title: string, option: string) => {
    setSelected((prev) => {
      const arr = prev[title] || [];
      return arr.includes(option)
        ? { ...prev, [title]: arr.filter((x) => x !== option) }
        : { ...prev, [title]: [...arr, option] };
    });
  };

  return (
    <div className={styles.filterContainer}>
      
      {/* ------------------ CUSTOMIZABLE (special) ------------------ */}
      <div className={styles.filterBox}>
        <div className={styles.singleRow}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={customizable}
              onChange={() => setCustomizable(!customizable)}
            />
            <span>CUSTOMIZABLE</span>
          </label>
        </div>
      </div>

      {/* ------------------ OTHER FILTERS ------------------ */}
      {filters.map((item, index) => {
        const selectedValues = selected[item.title] || [];

        return (
          <div key={index} className={styles.filterBox}>
            
            {/* Header Row */}
            <div
              className={styles.topRow}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h4>{item.title}</h4>
              <span
                className={`${styles.arrow} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Selected Text */}
            <p className={styles.selectedValue}>
              {selectedValues.length > 0
                ? selectedValues.join(", ")
                : "All"}
            </p>

            {/* Dropdown */}
            {openIndex === index && (
              <div className={styles.dropdownMenu}>
                {item.options.map((opt, i) => (
                  <label key={i} className={styles.optionRow}>
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(opt)}
                      onChange={() => toggleOption(item.title, opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
