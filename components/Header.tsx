"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./Header.module.css";

const navigationItems = [
  { label: "ホーム", href: "/" },
  { label: "コンテンツ一覧", href: "/contents" },
  { label: "AIモデル/サービス", href: "/contents?category=ai-model-service" },
  { label: "プロンプト", href: "/dictionary" },
  { label: "制作ガイド", href: "/contents?category=guide" },
  { label: "ComfyUI", href: "/contents?category=comfyui" },
  { label: "ツール", href: "/contents?category=tools" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} href="/" aria-label="LULINAworks ホーム" onClick={closeMenu}>
          <img
            className={styles.logo}
            src="/assets/brand/logoword-standard.png"
            alt="LULINAworks"
            width="2172"
            height="724"
          />
        </Link>

        <button
          ref={menuButtonRef}
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={navigationId}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id={navigationId}
          className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
          aria-label="グローバルナビゲーション"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link className={styles.navLink} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
