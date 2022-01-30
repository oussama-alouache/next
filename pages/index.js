import Head from 'next/head'
import Image from 'next/image'
import Featured from '../componants/Featured'
import Navbar from '../componants/navbar'
import Productlist from '../componants/Porductlist'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>food order</title>
        <meta name="description" content="food order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Featured/>
      <Productlist/>
    </div>
  )
}
