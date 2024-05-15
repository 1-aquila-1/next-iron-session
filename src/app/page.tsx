"use client"
import { logout } from "@/action/auth.action";
import styles from "@/app/page.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState<string>()
  const toLogout = async () => {
    setLoading("Saindo...")
    await logout()
  }

  return (
    <main className={styles.container}>
      <h1>Sys Sale</h1>
      <div className={styles.menu}>
        <Link href="/about">Sobre</Link>
        <Link href="https://product.wiggles.com.br">Product</Link>
        <button onClick={toLogout}>Sair</button>
      </div>
      <h5>{loading}</h5>
    </main>
  );
}
