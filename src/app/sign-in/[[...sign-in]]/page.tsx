"use client";

import { SignIn } from "@clerk/nextjs";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <section className={styles.signInPage}>
      <SignIn  />
    </section>
  );
}
