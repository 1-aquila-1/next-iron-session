"use client"

import styles from "@/app/page.module.scss";
import Link from "next/link";

export default function Sobre() {

  return (
    <main className={styles.container}>
      <h1>About Sys Sale</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
}
