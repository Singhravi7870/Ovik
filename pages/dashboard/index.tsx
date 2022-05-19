import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import styles from '../../styles/Home.module.css'

const Dashboard: NextPage = () => {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to <a>Dashboard!!</a>
        </h1>
    </Layout>
  )
}

export default Dashboard
