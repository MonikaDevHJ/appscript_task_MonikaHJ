import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

import Backside_bag from "../../../public/assets/Backside_bag.svg";
import belt_image from "../../../public/assets/belt_image.svg";
import black_white_bag from "../../../public/assets/black_white_bag.svg";
import flat_bag from "../../../public/assets/flat_bag.svg";
import Vanity_bag from "../../../public/assets/Vanity_bag.svg";
import white_bag from "../../../public/assets/white_bag.svg";
import yellow_bag from "../../../public/assets/yellow_bag.svg";
import Yellow_doll from "../../../public/assets/Yellow_doll.svg";
import white_cap from "../../../public/assets/white_cap.svg";
import { fetchProducts } from "../api/getProducts";

// ❤️ Heart icon (red)
const HeartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="#ff3b3b"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.heartIcon}
  >
    <path d="M12 21s-6.1-4.35-9.5-8.05C-1.4 9.24 2.02 3.5 7.28 3.5c2.07 0 3.86 1.12 4.72 2.77C12.86 4.62 14.65 3.5 16.72 3.5c5.26 0 8.68 5.74 4.78 9.45C18.1 16.65 12 21 12 21z" />
  </svg>
);

export default function ProductCard() {
  const productList = [
    { img: Backside_bag, title: "Puma Bag", price: "100Rs" },
    { img: Yellow_doll, title: "Baby Doll", price: "299Rs" },
    { img: belt_image, title: "Bata Belt", price: "799Rs" },
    { img: white_cap, title: "WildCraft Cap", price: "789Rs" },
    { img: Backside_bag, title: "Puma Bag", price: "800Rs" },
    { img: Yellow_doll, title: "Barbie", price: "8080Rs" },
    { img: yellow_bag, title: "Yellow Bag", price: "8080Rs" },
    { img: flat_bag, title: "Flat Bag", price: "8080Rs" },
    { img: Backside_bag, title: "Puma Bag", price: "999Rs" },
    { img: white_bag, title: "White Bag", price: "899Rs" },
    { img: black_white_bag, title: "Black-White Bag", price: "1009Rs" },
    { img: white_cap, title: "White Cap", price: "8899Rs" },
    { img: Yellow_doll, title: "Cute Doll", price: "168Rs" },
    { img: Vanity_bag, title: "Vanity Bag", price: "4569Rs" },
    { img: Backside_bag, title: "Puma Pack", price: "856Rs" },
  ];


  useEffect(() => {
    async function load() {
      const data = await fetchProducts();
    }
    load();
  }, []);

  return (
    <div className={styles.gridSection}>
      <div className={styles.grid}>
        {productList.map((product, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.img}
                alt="product"
                width={300}
                height={300}
                className={styles.image}
              />

              {/* ❤️ Wishlist Heart */}
              <div className={styles.wishlist}>
                <HeartIcon />
              </div>
            </div>

            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
