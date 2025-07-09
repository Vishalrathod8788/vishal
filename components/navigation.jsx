"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Vishal Rathod
        </Link>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}
      </div>
    </nav>
  );
}
