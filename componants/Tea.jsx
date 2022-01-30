import Image from "next/image";
import styles from "../styles/Gateaux.module.css";

const Gateux = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/tarte.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>tarte </h1>
      <span className={styles.price}>50 DA</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Gateux;
