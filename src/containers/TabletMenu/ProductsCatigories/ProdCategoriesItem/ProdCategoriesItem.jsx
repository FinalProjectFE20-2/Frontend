import { Link } from 'react-router-dom';
import styles from './ProdCategoriesItem.module.scss';

export default function ProdCategoriesItem({ item, className }) {
  return (
    <li>
      <Link className={`${styles.link} ${className}`} to={item.url}>
        <div className={styles.imgWrapper}>
          {item.img && <img src={item.img} alt={item.title} />}
        </div>
        <h2 className={styles.title}>{item.title}</h2>
      </Link>
    </li>
  );
}
