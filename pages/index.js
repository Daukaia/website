import styles from "../styles/main.module.css";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`${styles.mainpage} ${newsreader.className}`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src="/images/mainpage.png"
          alt="Smiling girl"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>
            Creating <span className={styles.highlight}>safer lives</span> and{" "}
            <span className={styles.highlight}>brighter futures</span>
          </h1>
          <button className={styles.donateBtnLarge}>Donate</button>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.sectionText}>
          <h2 className={styles.sectionTitle}>Who we are</h2>
          <p>
            We are a passionate collective of local and global changemakers
            committed to giving the children of Ocotal the opportunity of a
            fulfilling life. Most of all, we're normal people wanting to make a
            difference.
          </p>
          <p>
            We believe in the transformative power of community and foster
            long-term impact through a holistic, grassroots approach that
            combines education, empowerment, and sustainable practices.
          </p>
        </div>
        <img
          src="/images/flower-1.png"
          alt="Flower 1"
          className={styles.flower}
        />
      </section>

      {/* What we do Section */}
      <section className={styles.whatWeDoSection}>
        <img
          src="/images/flower-2.png"
          alt="Flower 2"
          className={styles.flower}
        />
        <div className={styles.sectionText}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p>
            We support children in Ocotal, Nicaragua, through education, health,
            personal development, and community support so they can overcome
            challenges and thrive.
          </p>
          <p>
            We offer a safe and nurturing space for children and their families,
            where they can access emotional support, build strong relationships,
            and engage in community activities that promote well-being and
            collaboration.
          </p>
          <div className={styles.buttons}>
            <button className={styles.volunteerBtn}>Volunteer</button>
            <button className={styles.ambassadorBtn}>
              Become an Ambassador
            </button>
            <button className={styles.schoolsBtn}>Daukaia for Schools</button>
            <button className={styles.partnershipsBtn}>
              Partnerships with Companies
            </button>
          </div>
        </div>
      </section>

      {/* Meaning Section */}
      <section className={`${styles.meaningSection} `}>
        <h3 className={styles.meaningTitle}>
          Daukaia: (verb){" "}
          <em className={styles.meaningTodo}>to do, to teach.</em> [
          <i>Miskito</i>]
        </h3>
      </section>

      {/* Betty Section */}
      <section className={styles.bettySection}>
        <div className={styles.bettyContent}>
          <div className={styles.bettyText}>
            <h3>This is Betty.</h3>
            <p>And this photo was taken when we first met her in 2012.</p>
            <p>
              We worked with Betty for three years to help her find her own
              voice, get an education and build her grit and confidence. Today,
              she is a young and driven accountant, feeling fulfilled at work
              and helping her family thrive.
            </p>
            <i>
              "I'm proud of who I am. I have strong values, I am determined, I
              care about my family and about doing good. I will always be
              grateful to Daukaia." - Betty, age 25.
            </i>
          </div>
          <div className={styles.bettyImageWrapper}>
            <img
              src="/images/betty.png"
              alt="Betty"
              className={styles.bettyImage}
            />
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className={styles.partnerSection}>
        <h4 className={styles.partnerTitle}>
          Proud partner of <span>Casa Pueblito</span>
        </h4>
        <img
          src="/images/casa-pueblito.png"
          alt="Casa Pueblito"
          className={styles.partnerLogo}
        />
      </section>

      {/* Join Us Section */}
      <section className={styles.joinUsSection}>
        <h2>Join us!</h2>
        <p>
          We need passionate, innovative individuals like you to join us as
          Ambassadors, volunteers, or donors. Whether through a bake sale, a
          creative project, or spreading our mission, your unique talents and
          efforts can light up the path to a brighter future for a child. Maybe
          you want to involve your class, your company, or a group of friends?
        </p>
        <p>
          Your support empowers children like Betty to build better lives for
          themselves and their families by providing the safety, skills, and
          mindset they need to follow their dreams and contribute positively to
          the world.
        </p>
        <div className={styles.joinButtons}>
          <button>Learn More</button>
          <button>Get Involved</button>
          <button>Donate</button>
        </div>
      </section>
    </div>
  );
}
