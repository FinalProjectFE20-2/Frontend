import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { useLocation } from 'react-router';

const Breadcrumbs = () => {
  const location = useLocation();
  const Keys = {
    cart: 'Корзина',
    checkout: 'Оформлення замовлення',
  };
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <span className={styles.crumb} key={crumb}>
          <Link to={currentLink}>{Keys[crumb]}</Link>
        </span>
      );
    });

  return (
    <div className={styles.breadcrumbs} data-testid="Breadcrumbs">
      <Link to={'/'} className={styles.crumb}>
        Головна
      </Link>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
