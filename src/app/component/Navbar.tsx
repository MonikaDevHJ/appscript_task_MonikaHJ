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

  return (
    <>
      <nav className={styles.navbar}>

        {/* LEFT: Hamburger for mobile, LogoIcon for desktop */}
        <div
          className={styles.leftSection}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {/* Hamburger visible only in mobile */}
          <Image src={MenuIcon} alt="menu" width={28} height={28} className={styles.mobileMenuIcon} />

          {/* Logo icon visible only on desktop */}
          <Image src={LogoIcon} alt="logo icon" width={32} height={32} className={styles.desktopLogoIcon} />
        </div>

        {/* MIDDLE SECTION (Logo Text + Menu for Desktop) */}
        <div className={styles.centerSection}>
          <div className={styles.logo}>LOGO</div>   

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            <li>SHOP</li>
            <li>BAGS</li>
            <li>WALLETS</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {/* RIGHT ICONS */}
        <div className={styles.rightSection}>
          <Image src={searchnormal} alt="search" width={20} height={20} />
          <Image src={heart} alt="wishlist" width={20} height={20} />
          <Image src={shoppingbag} alt="cart" width={20} height={20} />
          <Image src={profile} alt="profile" width={20} height={20} />
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
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
