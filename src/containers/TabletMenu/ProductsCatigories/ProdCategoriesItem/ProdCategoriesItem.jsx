import { Link } from 'react-router-dom';
import styles from './ProdCategoriesItem.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../../../store/action/categories/actionCategories.js';

export default function ProdCategoriesItem({ item, className, children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsOpen());
  };
    const categoriUrl = item.id === 'allProducts' ? item.id :`categories/${item.id}`
  return (
    <li className={styles.item}>
      <Link
        className={`${styles.link} ${className}`}
        to={categoriUrl}
        onClick={handleClick}>
        {children ? (
          children
        ) : (
          <>
            <div className={styles.imgWrapper}>
              {item.imgUrl && (
                <img className={styles.img} src={item.imgUrl} alt={item.name} />
              )}
            </div>
            <h2 className={styles.title}>{item.name}</h2>
          </>
        )}
      </Link>
    </li>
  );
}
