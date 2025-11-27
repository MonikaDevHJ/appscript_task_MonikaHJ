"use client";

import { useState } from "react";
import styles from "./page.module.css";

import Navbar from "../app/component/Navbar";
import Discover from "../app/component/Discover";
import Recommended from "../app/component/Recomended";
import Filter from "./component/Filter";
import ProductCard from "./component/ProductCard";
import Footer from "./component/Footer";
export default function Home() {
  const [sortType, setSortType] = useState("Recommended");

  return (
    <div>
      <Navbar />
      <Discover />

      {/* Sorting component */}
      <Recommended onSort={(value) => setSortType(value)} />

      {/* Filter + Products */}
      <div className={styles.container}>
        <Filter />
        <ProductCard sortType={sortType} />
      </div>

      <Footer />
    </div>
  );
}
