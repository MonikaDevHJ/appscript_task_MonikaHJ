"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../app/styles/Navabar.module.css";

import MenuIcon from "../../../public/assets/menu.svg";
import LogoIcon from "../../../public/assets/Logo.svg";

import searchnormal from "../../../public/assets/searchnormal.svg";
import shoppingbag from "../../../public/assets/shoppingbag.svg";
import heart from "../../../public/assets/heart.svg";
import profile from "../../../public/assets/profile.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <nav className={styles.navbar}>

        {/* LEFT SECTION */}
        <div className={styles.leftSection} onClick={() => setOpenMenu(!openMenu)}>
          <Image src={MenuIcon} alt="menu" width={28} height={28} className={styles.mobileMenuIcon} />
          <Image src={LogoIcon} alt="logo icon" width={32} height={32} className={styles.desktopLogoIcon} />
        </div>

        {/* CENTER SECTION */}
        <div className={styles.centerSection}>
          <div className={styles.logo}>LOGO</div>

          <ul className={styles.menu}>
            <li>SHOP</li>
            <li>BAGS</li>
            <li>WALLETS</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {/* RIGHT SECTION + DROPDOWN */}
        <div className={styles.rightWrapper}>
          <div className={styles.rightSection}>
            <Image src={searchnormal} alt="search" width={20} height={20} />
            <Image src={heart} alt="wishlist" width={20} height={20} />
            <Image src={shoppingbag} alt="cart" width={20} height={20} />
            <Image src={profile} alt="profile" width={20} height={20} />
          </div>

          {/* LANGUAGE DROPDOWN */}
          <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              ENG
              <span className={`${styles.arrow} ${showDropdown ? styles.open : ""}`}>⌄</span>
            </button>

            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <p className={styles.dropdownItem}>English</p>
                <p className={styles.dropdownItem}>Spanish</p>
                <p className={styles.dropdownItem}>French</p>
              </div>
            )}
          </div>
        </div>

      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {openMenu && (
        <ul className={styles.mobileMenu}>
          <li>SHOP</li>
          <li>BAGS</li>
          <li>WALLETS</li>
          <li>CONTACT</li>
        </ul>
      )}
    </>
  );
}
