"use client";
import { useState } from "react";
import styles from "../styles/Filter.module.css";

export default function Filter() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [selected, setSelected] = useState<{ [key: string]: string[] }>({});

  const filters = [
    { title: "CUSTOMIZABLE", options: ["Yes", "No"] },
    { title: "IDEAL FOR", options: ["Men", "Women", "All"] },
    { title: "OCCASION", options: ["Work", "Casual", "Party"] },
    { title: "FABRIC", options: ["Cotton", "Leather", "Nylon"] },
    { title: "SEGMENT", options: ["Premium", "Standard"] },
    { title: "SUITABLE FOR", options: ["Adults", "Kids", "All"] },
  ];

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
      {filters.map((item, index) => {
        const selectedValues = selected[item.title] || [];

        return (
          <div key={index} className={styles.filterBox}>
            
            {/* Header row (expand collapse) */}
            <div
              className={styles.topRow}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
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

            {/* Selected values */}
            <p className={styles.selectedValue}>
              {selectedValues.length > 0
                ? selectedValues.join(", ")
                : "All"}
            </p>

            {/* Dropdown options */}
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
