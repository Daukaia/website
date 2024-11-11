import styles from "../styles/who-we-are.module.css";
import { Newsreader } from "next/font/google";
import { HISTORY_EVENTS, IMPACTS, VALUES } from "../utils/values";

const newsreader = Newsreader({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function WhoWeAre() {
  return (
    <div className={`${styles.mainpage} ${newsreader.className}`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="/images/who-we-are.png"
          alt="Who we are"
          className={styles.heroImage}
        />
        <img
          src="/images/yellow-element.png"
          alt="Yellow bg"
          className={styles.heroImageYellow}
        />
        <h2 className={styles.heroTitle}>Who we are</h2>
      </section>

      <div className={styles.multiSection}>
        <section className={styles.aboutSection}>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionTitle}>Mission</h2>
            <p>
              We are committed to creating conditions in which the children of
              Ocotal can thrive, today and in generations to come.
            </p>
            <p>
              We believe that every child deserves a healthy and safe,
              supportive environment where their individuality is encouraged to
              flourish and their rights respected.
            </p>
            <p>
              We aspire to build a community where all children have a real
              chance of becoming independent adults who can pursue a career,
              make empowered, autonomous life choices and become change agents
              that contribute to the greater good.
            </p>
            <h2 className={styles.sectionTitle}>Values</h2>
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionTitle}>Vision</h2>
            <p>
              We envision a world where every child has the opportunity to live
              a fulfilling life, supported by a nurturing environment and
              opportunities to make a difference.
            </p>
          </div>
          <img
            src="/images/flower-3.png"
            alt="Flower 1"
            className={styles.flower}
          />
        </section>
      </div>

      {/* Values */}
      <section className={styles.values}>
        {VALUES.map((value) => (
          <div key={value.name} className={styles.value}>
            <h3 className={styles.valueText}>{value.name}</h3>
            <img src={value.logo} className={styles.valueLogo} />
            <p className={styles.valueDescription}>{value.description}</p>
          </div>
        ))}
      </section>

      {/* Impact */}
      <section className={styles.impacts}>
        <h2 className={`${styles.sectionTitle} ${styles.impactTitle}`}>
          Impact
        </h2>
        <p className={styles.impactSubtitle}>So far, we have:</p>
        <div className={styles.impactList}>
          {IMPACTS.map((impact, index) => (
            <div key={index} className={styles.impactItem}>
              <div>
                <span className={styles.impactBullet}>●</span>
                <strong>{impact.title}</strong>
              </div>
              <p>{impact.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
