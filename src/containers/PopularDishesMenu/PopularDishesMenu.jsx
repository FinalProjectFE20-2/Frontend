import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './PopularDishesMenu.module.scss';

const PopularDishesMenu = (props) => {
  //
  const products = useSelector(
    (state) => state.products.products || [],
  );
  return (
    <section className={`${styles.PopularDishes} container`}>
      <h2 className={styles.title}>Популярні страви</h2>
      <ul className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.itemNo} itemNo={product.itemNo} />
        ))}
      </ul>
    </section>
  );
};

PopularDishesMenu.propTypes = {};

export default PopularDishesMenu;
