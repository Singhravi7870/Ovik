import Head from "next/head";
import Header from "./header"
import Footer from "./footer"
import styles from '../../styles/Home.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ovik Finance - Admin</title>
        <meta name="description" content="Ovik Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.container}>
        <div className={styles.main}>{children}</div>
      </main>
      <Footer/>
    </>
  );
}