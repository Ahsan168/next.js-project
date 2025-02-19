import Head from 'next/head';
import styles from '../styles/About.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our real estate company." />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>We are dedicated to helping you find your dream home.</p>
      </main>

      <Footer />
    </div>
  );
}
```