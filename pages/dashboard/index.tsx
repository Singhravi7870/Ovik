import type { NextPage } from 'next'
import Layout from '@/components/Layout';
import styles from '../../styles/Home.module.css'

import React from "react";

const Dashboard: NextPage = () => {

  return (
    <Layout>

      <div className={styles.topbar}>
          <a href="/dashboard/add_new" className={styles.card}>
            <span className={styles.logo}>
            Add New 
            </span>  
          </a>
      </div>

    </Layout>
  )
}

export default Dashboard
