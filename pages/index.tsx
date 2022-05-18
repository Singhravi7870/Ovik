import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ovik Finance - Admin</title>
        <meta name="description" content="Ovik Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Ovik Finance!</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
          <span className={styles.logo}>
            <Image src="/google-logo.svg" alt="Google Logo" width={72} height={16} />
          </span>
            Login with Google
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
