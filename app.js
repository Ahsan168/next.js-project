import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

## 3. `pages/index.js`
```javascript
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate Landing Page</title>
        <meta name="description" content="Find your dream home with us!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Our Real Estate</h1>
        <p className={styles.description}>Find your dream home with us!</p>
        <Image src="/house.jpg" alt="House" width={500} height={300} />
        <button className={styles.button}>Contact Us</button>
      </main>

      <Footer />
    </div>
  );
}
```
