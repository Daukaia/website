import Head from "next/head";
import styles from "../styles/main.module.css";
import "../styles/global.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daukaia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />

      <footer>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Legal Notice
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
