import { Link } from 'react-router-dom';
import styles from './Action.module.scss';
import ProdCategoriesItem from '../ProductsCatigories/ProdCategoriesItem/ProdCategoriesItem.jsx';

export default function Action({ upPrice, downprice, obj }) {
  return (
    <ProdCategoriesItem item={obj} className={styles.link}>
      <p className={styles.priceText}>{`${upPrice}%`}</p>
      <p className={styles.text}>{obj.title}</p>
      <p className={styles.priceText}>{`${downprice}%`}</p>
    </ProdCategoriesItem>
  );
}
