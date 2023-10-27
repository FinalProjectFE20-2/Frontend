import { Link } from 'react-router-dom';
import img from '../17.png';
import styles from './ProdCategoriesItem.module.css';

export default function ProdCategoriesItem({ item }) {
  return (
    <li>
      <Link className={styles.link} to={item.url}>
        <img src={img} alt={item.title} />
        <h2>{item.title}</h2>
      </Link>
    </li>
  );
}
