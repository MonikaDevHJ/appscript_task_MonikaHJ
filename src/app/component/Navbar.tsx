import React from "react";
import styles from "../styles/Navabar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left menu icon */}
      <div className={styles.leftSection}>
        <Image src="/hamburger.svg" alt="menu" width={20} height={20}/>
      </div>

      {/* Center: Logo */}
      <div className={styles.logo}>LOGO</div>

      {/* Center Menu Items */}
      <ul className={styles.menu}>
        <li>SHOP</li>
        <li>BAGS</li>
        <li>WALLETS</li>
        <li>CONTACT</li>
      </ul>

      {/* Right icons */}
      <div className={styles.rightSection}>
        <Image src="/search-icon.svg" alt="search" width={20} height={20}/>
        <Image src="/heart-icon.svg" alt="wishlist" width={20} height={20}/>
        <Image src="/cart-icon.svg" alt="cart" width={20} height={20}/>
      </div>
    </nav>
  );
};

export default Navbar;
