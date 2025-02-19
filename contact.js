import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us." />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out for any inquiries.</p>
      </main>

      <Footer />
    </div>
  );
}
```
