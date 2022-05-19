import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '../../styles/Home.module.css'

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ovik Finance - Dashboard</title>
        <meta name="description" content="Ovik Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Dashboard!</a>
        </h1>

      </main>
      <Footer/>
    </div>
  )
}

export default Dashboard
