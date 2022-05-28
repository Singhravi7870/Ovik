import type { NextPage } from 'next'
import Layout from '@/components/Layout';
import styles from '../../styles/Home.module.css';
import { useState } from "react";
import SortableTable from "@/components/SortableTable";
import Searchbar from "@/components/Searchbar"
import data from "../../data.json";
import Popup from './popup';

import React from "react";


const Dashboard: NextPage = () => {

  const [modal,setModal]=useState(false);

  const popupHandler=()=>{
    setModal(true);
  }



  return (
    
    <Layout>
      
      {/* <div className={styles.topbar}>
          
      <a href="/dashboard/add_new" className={styles.card}>
            <span className={styles.logo}>
            Add New 
            </span>
            </a>  
          
      </div> */}

      <button style={{width: "20%"}} onClick={popupHandler}> Add New </button>
      
      <Searchbar />
      {modal && <Popup />}
       <SortableTable data={data} />
    
      
    </Layout>
    
   
    
    
  )
}

export default Dashboard

{/* <a href="/dashboard/add_new" className={styles.card}> */}