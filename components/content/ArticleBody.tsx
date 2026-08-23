import type { ReactNode } from "react";
import styles from "./ContentPage.module.css";

type ArticleBodyProps = {
  children: ReactNode;
};

export function ArticleBody({ children }: ArticleBodyProps) {
  return <section className={styles.articleBody}>{children}</section>;
}
