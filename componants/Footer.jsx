import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/k.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
     imperdiet faucibus. In hac habitasse platea dictumst.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ADRESSE</h1>
          <p className={styles.text}>
            adresse 
            <br /> adressse
            
          </p>
          <h1 className={styles.title}>NUMERO DE TELEPHONE</h1>
          <p className={styles.text}>
             (602) 867-1011
          </p>
          <h1 className={styles.title}>ADRESSE MAIL</h1>

          <p className={styles.text}>
            TUNISI@GMAIL.COM
           
          </p>
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> HORAIRE DE TRAVAIL</h1>
          <p className={styles.text}>
DE DIMANCHE A JEUDI            <br /> 9:00 – 23:00
          </p>
          <p className={styles.text}>
            VENDREDI - SAMEDI
            <br /> 12:00 – 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
