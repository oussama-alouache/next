import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Produit</th>
            <th>Nom</th>
            <th>taille</th>
            <th>Extras</th>
            <th>Prix</th>
            <th>Quantier</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/tarte.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>tarte au  citron</span>
            </td>
            <td>
            <td>
              <span className={styles.name}>petit</span>
            </td>
              <span className={styles.extras}>
               
              </span>
            </td>
            <td>
              <span className={styles.price}>30 da</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>60 da</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/the.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>thé</span>
            </td>
            <td>
              <span className={styles.extras}>grand</span>
            </td>
            <td>
              <span className={styles.extras}>
                haba souda,citron
              </span>
            </td>
            <td>
              <span className={styles.price}>100</span>
            </td>
            <td>
              <span className={styles.quantity}>1</span>
            </td>
            <td>
              <span className={styles.total}>100 da</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>TOTAL:</b>160 DA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0DA
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total net :</b>160 da          </div>
          <button className={styles.button}>PTOCEDER AU PAYMENT!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
