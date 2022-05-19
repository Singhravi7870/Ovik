import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Header: NextPage = () => {
  return (
      <div className={styles.header}>
        <div className={styles.grid}>
            <Image src="/ovik-finance-logo.png" alt="Ovik Finance" width={200} height={50} />
        </div>
      </div>
  )
}

export default Header
