"use client"

import { useState } from "react";
import styles from "./auth.module.scss";
import { setSession } from "@/action/auth.action";
export default  function AuthPage() {
    const [loading, setLoading] = useState<string>()

    const toFazerLogin = async () =>{
        setLoading("Fazendo o login....")
        await setSession("1")
    }

  return (
    <main className={styles.container}>
      <h1>Sys Sale</h1>
      <button onClick={toFazerLogin}>Fazer Login</button>
      <h3>{loading}</h3>
    </main>
  );
}
