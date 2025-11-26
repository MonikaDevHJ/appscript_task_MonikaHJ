import styles from "../styles/Navabar.module.css";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg"
import searchnormal from "../../../public/assets/searchnormal.svg"
import shoppingbag from "../../../public/assets/shoppingbag.svg"
import heart from "../../../public/assets/heart.svg"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left menu icon */}
      <div className={styles.leftSection}>
        <Image src={Logo } alt="menu" width={40} height={40}/>
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
        <Image src={searchnormal } alt="search" width={20} height={20}/>
        <Image src={heart } alt="wishlist" width={20} height={20}/>
        <Image src={shoppingbag} alt="cart" width={20} height={20}/>
      </div>
    </nav>
  );
};

export default Navbar;
