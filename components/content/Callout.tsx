import type { ReactNode } from "react";
import styles from "./ContentPage.module.css";

export type CalloutVariant = "info" | "point" | "note" | "warning";

type CalloutProps = {
  children: ReactNode;
  variant?: CalloutVariant;
  label?: string;
};

const defaultLabels: Record<CalloutVariant, string> = {
  info: "補足",
  point: "ポイント",
  note: "メモ",
  warning: "注意",
};

export function Callout({ children, variant = "info", label }: CalloutProps) {
  const resolvedLabel = label ?? defaultLabels[variant];

  return (
    <aside
      className={`${styles.callout} ${styles[`callout-${variant}`]}`}
      aria-label={resolvedLabel}
    >
      <span className={styles.calloutLabel}>{resolvedLabel}</span>
      <p>{children}</p>
    </aside>
  );
}
