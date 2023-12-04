import { Link } from 'react-router-dom';
import styles from './ProdCategoriesItem.module.scss';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../../../store/action/categories/actionCategories.js';

export default function ProdCategoriesItem({ item, className, children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsOpen());
  };

  return (
    <li className={styles.item}>
      <Link
        className={`${styles.link} ${className}`}
        to={item.url}
        onClick={handleClick}>
        {children ? (
          children
        ) : (
          <>
            <div className={styles.imgWrapper}>
              {item.img && (
                <img className={styles.img} src={item.img} alt={item.title} />
              )}
            </div>
            <h2 className={styles.title}>{item.title}</h2>
          </>
        )}
      </Link>
    </li>
  );
}
