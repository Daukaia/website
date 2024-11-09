import LanguageSocials from "./LanguageSocials";
import styles from "../styles/header.module.css";
import Link from "next/link";

function Header({}) {
  return (
    <header className={styles.header}>
      <LanguageSocials />
      <div className={styles.navigation}>
        <img src="/logo.png" className={styles.logo} />
        <div className={styles.buttons}>
          <Link className={styles.navBtn} href="/who-we-are">
            Who we are
          </Link>
          <button className={styles.navBtn}>What we do</button>
          <button className={styles.navBtn}>Ignate change</button>
          <button className={`${styles.navBtn} ${styles.donateBtn}`}>
            Donate
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
