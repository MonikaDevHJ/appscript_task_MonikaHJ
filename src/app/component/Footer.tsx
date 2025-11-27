import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* ---------- TOP SECTION ---------- */}
      <div className={styles.top}>
        <div className={styles.left}>
          <h2 className={styles.logo}>LOGO</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Providing quality products for everyone.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkBox}>
            <h4>Shop</h4>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Accessories</p>
          </div>

          <div className={styles.linkBox}>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Stores</p>
          </div>

          <div className={styles.linkBox}>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>Order Tracker</p>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM SECTION ---------- */}
      <div className={styles.bottom}>
        <p>© 2024 Your Company. All Rights Reserved.</p>

        <div className={styles.social}>
          <span>📘</span>
          <span>📸</span>
          <span>🐦</span>
          <span>▶️</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
