import { Link } from 'react-router-dom';
import styles from './Action.module.css';

export default function Action({ upPrice, downprice, obj }) {
  return (
    <Link to={obj.url} className={styles.link}>
      <p className={styles.priceText}>{`${upPrice}%`}</p>
      <p className={styles.text}>{obj.title}</p>
      <p className={styles.priceText}>{`${downprice}%`}</p>
    </Link>
  );
}
