import fondo from "/public/fondo.png";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url(${fondo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <Card />
      </div>
    </main>
  );
}
