import styles from "../styles/Productlist.module.css";
import Drink from "./Drink";
import Cac from "./Kaw";
import cac from "./Kaw";
import Gateux from "./Tea";
import Tea from "./Tea";


const Productlist = ({Gateau}) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>NOS GATEAUX</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
          {Gateau.map (( Gateau) =>(
            <Gateux key={Gateau._id} Gateau={Gateau}/>
          ))
          }


      </div>
      <h1 className={styles.title}>NOS BOISONS</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
<Drink/>
<Drink/>
<Drink/>
<Drink/>

      </div>
      <h1 className={styles.title}>NOS FRUITS SECS</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
<Cac/>
<Cac/>
<Cac/>
<Cac/>


      </div>
      </div>
    );
  };
  export const  getServerSideProps = async () => {

    const res = await axios.get ("http://localhost:3000/api/gateau");
    return {
      props:{
        Gateau:res.data
      }
      
    }
    
  }
  
export default Productlist