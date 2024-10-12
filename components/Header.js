import LanguageSocials from "./LanguageSocials";
import styles from "../styles/header.module.css";

function Header({}) {
  return (
    <header className={styles.header}>
      <LanguageSocials />
      <div className={styles.navigation}>
        <img src="/logo.png" className={styles.logo} />
        <div className={styles.buttons}>
          <button className={styles.navBtn}>Who we are</button>
          <button className={styles.navBtn}>What we do</button>
          <button className={styles.navBtn}>Ignate change</button>
          <button className={styles.navBtn}>Donate</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
