"use client";
import { useMemo } from "react";
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

  return (
    <div className={styles.super}>
      <div className={styles.card}>
        <Card/>
      </div>
      <div className={styles.main}>
          <Map />
      </div>
    </div>
  );
}
