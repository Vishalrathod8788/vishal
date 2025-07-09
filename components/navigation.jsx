import Link from "next/link";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>Vishal Rathod</h1>
      </div>
      <nav className={style.nav}>
        <ul>
          <li className={style.navbarLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.navbarLink}>
            <Link href="/about">About</Link>
          </li>
          <li className={style.navbarLink}>
            <Link href="/project">Projects</Link>
          </li>
          <li className={style.navbarLink}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={style.navbarLink}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
