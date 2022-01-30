import Image from "next/image";
import styles from "../styles/Gateaux.module.css";

const Cac = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/cac.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>cacahuète </h1>
      <span className={styles.price}>60 DA/100G</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Cac;
