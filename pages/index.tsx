import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '@/components/layout';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response: any) => {
  console.log(response);
}

const Home: NextPage = () => {
  return (
    <Layout>
        <h1 className={styles.title}>
          Welcome to <a>Ovik Finance!</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <GoogleLogin className={styles.card}
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </a>
        </div>
        <div className={styles.grid}>
          <a href="/dashboard" className={styles.card}>
            <span className={styles.logo}>
            Login
            </span>  
          </a>
        </div>
    </Layout>
  )
}

export default Home

