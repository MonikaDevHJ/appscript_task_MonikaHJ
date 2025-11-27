import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import pageStyles from "../../app/page.module.css";

export default function ProductCard() {
  return (
    <div className={pageStyles.productSection}>
      <div className={pageStyles.productGrid}>
        
        {/* SAMPLE CARD 1 */}
        <div className={styles.card}>
          <Image
            src="/bag1.jpg"
            alt="product"
            width={400}
            height={400}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
        </div>

        {/* SAMPLE CARD 2 */}
        <div className={styles.card}>
          <Image
            src="/bag2.jpg"
            alt="product"
            width={400}
            height={400}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
        </div>

        {/* SAMPLE CARD 3 */}
        <div className={styles.card}>
          <Image
            src="/bag3.jpg"
            alt="product"
            width={400}
            height={400}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
        </div>

      </div>
    </div>
  );
}
