import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../componants/Featured'
import Navbar from '../componants/navbar'
import Productlist from '../componants/Porductlist'
import styles from '../styles/Home.module.css'

export default function Home({Gateau}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>food order</title>
        <meta name="description" content="food order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Featured/>
      <Productlist Gateau={Gateau} />
     
    </div>
    
  )
}
  export const  getServerSideProps = async () => {

    const res = await axios.get ("http://localhost:3000/api/gateau");
    return {
      props:{
        Gateau:res.data
      }
      
    }
    
  }

