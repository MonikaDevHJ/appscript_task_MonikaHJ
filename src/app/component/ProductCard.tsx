import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import pageStyles from "../../app/page.module.css";
import Backside_bag from "../../../public/assets/Backside_bag.svg";
import belt_image from "../../../public/assets/belt_image.svg";
import black_white_bag from "../../../public/assets/black_white_bag.svg";
import flat_bag from "../../../public/assets/flat_bag.svg";
import Vanity_bag from "../../../public/assets/Vanity_bag.svg";
import white_bag from "../../../public/assets/white_bag.svg";
import yellow_bag from "../../../public/assets/yellow_bag.svg";
import Yellow_doll from "../../../public/assets/Yellow_doll.svg";
import white_cap from "../../../public/assets/white_cap.svg";

export default function ProductCard() {
  return (
    <div className={pageStyles.productSection}>
      <div className={pageStyles.productGrid}>
        {/* SAMPLE CARD 1 */}
        <div className={styles.card}>
          <Image
            src={Backside_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Puma Bag</p>
          <p className={styles.price}>100Rs</p>
        </div>

        {/* SAMPLE CARD 2 */}
        <div className={styles.card}>
          <Image
            src={Yellow_doll}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Baby Dool</p>
          <p className={styles.price}>299Rs</p>
        </div>

        {/* SAMPLE CARD 3 */}
        <div className={styles.card}>
          <Image
            src={belt_image}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Bata Belt</p>
          <p className={styles.price}>799Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={white_cap}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>WildCraft Cap</p>
          <p className={styles.price}>789Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={Backside_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Puma Bag</p>
          <p className={styles.price}>800Rs</p>
        </div>

        {/* SAMPLE CARD 2 */}
        <div className={styles.card}>
          <Image
            src={Yellow_doll}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Barbie</p>
          <p className={styles.price}>8080Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={yellow_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>8080Rs</p>
        </div>
        <div className={styles.card}>
          <Image
            src={flat_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>8080Rs</p>
        </div>
        <div className={styles.card}>
          <Image
            src={Backside_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>999Rs</p>
        </div>
        <div className={styles.card}>
          <Image
            src={white_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>899Rs</p>
        </div>
        <div className={styles.card}>
          <Image
            src={black_white_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>1009Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={white_cap}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>8899Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={Yellow_doll}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>168Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={ Vanity_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>4569Rs</p>
        </div>

        <div className={styles.card}>
          <Image
            src={Backside_bag}
            alt="product"
            width={300}
            height={300}
            className={styles.image}
          />
          <p className={styles.title}>Product Name</p>
          <p className={styles.price}>856Rs</p>
        </div>
      </div>
    </div>
  );
}
