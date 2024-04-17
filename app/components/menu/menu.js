"use client";

import styles from "./menu.module.css";
import Image from "next/image";
import logoMinam from "/public/logoMinam.png";
import logoIgp from "/public/logoIgp.png";
import homeIcon from "/public/homeIcon.png";
import worldIcon from "/public/worldIcon.png";
import { useState } from "react";
import Link from "next/link";

export default function menu() {
  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={styles.nav}>
      <Image src={logoMinam} height={50.2} className={styles.nav_img1} />
      <Image src={logoIgp} height={27.61} className={styles.nav_img2} />

      <div className={styles.hamburguer} onClick={handleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.options} ${isActive ? styles.active : ""}`}>
        <div className={styles.nav_item}>
            <Image src={homeIcon} height={17} className={styles.img} />
            <p><Link href='/'>Acerca de CDS</Link></p>
        </div>


        <div className={styles.nav_item}>
          <Image
            src={worldIcon}
            height={16.67}
            width={16.67}
            className={styles.img}
          />
          <p><Link href='/geovisor'>Geovisor CDS</Link></p>
        </div>
      </div>
      {/* <div className={styles.nav_item}>
        <Image src={homeIcon} height={17} className={styles.img} />
        <p>Acerca de CDS</p>
      </div>
      <div className={styles.nav_item}>
        <Image
          src={worldIcon}
          height={16.67}
          width={16.67}
          className={styles.img}
        />
        <p>Geovisor CDS</p>
      </div> */}
    </nav>
  );
}
