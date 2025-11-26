import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../app/component/Navbar"
import Discover from "../app/component/Discover"

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Discover/>
    </div>
  );
}
