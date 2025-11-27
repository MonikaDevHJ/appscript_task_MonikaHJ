import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../app/component/Navbar"
import Discover from "../app/component/Discover"
import Recommended from "../app/component/Recomended"
import Filter from "./component/Filter";
import ProductCard from "./component/ProductCard";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Discover/>
       <Recommended/>
       {/* Filter + Product */}
       <div className={styles.container}>
       <Filter/>
       <ProductCard/>
       </div>
     
    </div>
  );
}
