import { Link } from 'react-router-dom';
import styles from './Action.module.css';

export default function Action({ upPrice, downprice }) {
  return (
    <Link to={'action'} className={styles.link}>
      <p className={styles.priceText}>{`${upPrice}%`}</p>
      <p className={styles.text}>АКЦІЇ</p>
      <p className={styles.priceText}>{`${downprice}%`}</p>
    </Link>
  );
}
