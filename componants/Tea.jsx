import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Gateaux.module.css";

const Gateux = ({Gateau}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${Gateau._id}`} passHref>
      <Image src={Gateau.img} alt="" width="500" height="500" />

      </Link>
      <h1 className={styles.title}>{Gateau.title} </h1>
      <span className={styles.price}>{ Gateau.prices[0]}</span>
      <p className={styles.desc}>
{  Gateau.desc    }   
  </p>
    </div>
  );
};

export default Gateux;
