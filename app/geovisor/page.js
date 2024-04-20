"use client";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Card from "./components/card";

export default function Geovisor() {
  const Map = useMemo(
    () =>
      dynamic(() => import("./components/Map"), {
        loading: () => <p></p>,
        ssr: false,
      }),
    []
  );

  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.super}>
      <div className={`${styles.card} ${isActive ? styles.active : ""}`} onClick={handleMenu}>
        <Card />
      </div>
      <div className={styles.main}>
        <Map />
      </div>
    </div>
  );
}
