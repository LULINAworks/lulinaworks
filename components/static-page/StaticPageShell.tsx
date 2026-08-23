import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./StaticPage.module.css";

type StaticPageShellProps = {
  label: string;
  title: string;
  lead: string;
  children: ReactNode;
};

export function StaticPageShell({ label, title, lead, children }: StaticPageShellProps) {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <article className={styles.shell}>
          <header className={styles.header}>
            <span className={styles.label}>{label}</span>
            <h1>{title}</h1>
            <p>{lead}</p>
          </header>
          <section className={styles.body}>{children}</section>
        </article>
      </main>
      <Footer />
    </>
  );
}
