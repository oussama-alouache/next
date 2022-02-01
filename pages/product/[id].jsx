import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';





const Productid = ({Gateau_id}) => {
    const [size, setSize] = useState(0);
   
  
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={Gateau_id.img} objectFit="contain" layout="fill" alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{Gateau_id.title}</h1>
          <span className={styles.price}>${Gateau_id.prices[size]}</span>
          <p className={styles.desc}>{Gateau_id.desc}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}> 
            <div className={styles.size} onClick={() => setSize(0)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Medium</span>
            </div>
           
          </div>
         
          <div className={styles.add}>
              <input type="number" defaultValue={1} className={styles.quantity}/>
              <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };

  export const  getServerSideProps = async ({params}) => {

    const res = await axios.get (`http://localhost:3000/api/gateau/${params.id}`);
    return {
      props:{
        Gateau_id:res.data
      }
      
    }
  }


export default Productid;