import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./ContentPage.module.css";

type ContentPageShellProps = {
  children: ReactNode;
  articleId?: string;
};

export function ContentPageShell({ children, articleId }: ContentPageShellProps) {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <article className={styles.article} id={articleId}>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
