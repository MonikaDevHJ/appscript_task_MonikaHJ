"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import { fetchProducts } from "../api/getProducts";

// ❤️ Heart icon
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff3b3b">
    <path d="M12 21s-6.1-4.35-9.5-8.05C-1.4 9.24 2.02 3.5 7.28 3.5c2.07 0 3.86 1.12 4.72 2.77C12.86 4.62 14.65 3.5 16.72 3.5c5.26 0 8.68 5.74 4.78 9.45C18.1 16.65 12 21 12 21z"/>
  </svg>
);

export default function ProductCard({ sortType }: { sortType: string }) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchProducts();
      setProducts(data);
    }
    load();
  }, []);

  // 🔥 SORTING LOGIC
  const sortedProducts = [...products];

  if (sortType === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortType === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "Newest First") {
    sortedProducts.reverse(); // simple logic
  } else if (sortType === "Popular") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className={styles.gridSection}>
      <div className={styles.grid}>
        {sortedProducts.map((product: any) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className={styles.image}
              />

              <div className={styles.wishlist}>
                <HeartIcon />
              </div>
            </div>

            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
