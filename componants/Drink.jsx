import Image from "next/image";
import styles from "../styles/Gateaux.module.css";

const Drink = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/the.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>thé </h1>
      <span className={styles.price}>30 DA</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Drink;
