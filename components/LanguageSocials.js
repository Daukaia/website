import styles from "../styles/header.module.css";

function LanguageSocials({}) {
  return (
    <div className={styles.langsocials}>
      <button className={styles.languageBtn}>English</button>
      <img src="/images/facebook.png" className={styles.social} />
      <img src="/images/instagram.png" className={styles.social} />
      <img src="/images/linkedin.png" className={styles.social} />
      <img src="/images/youtube.png" className={styles.social} />
    </div>
  );
}

export default LanguageSocials;
