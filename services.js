import Head from 'next/head';
import styles from '../styles/Services.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore the services we offer." />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Our Services</h1>
        <p>We offer a variety of real estate services to meet your needs.</p>
      </main>

      <Footer />
    </div>
  );
}
```
