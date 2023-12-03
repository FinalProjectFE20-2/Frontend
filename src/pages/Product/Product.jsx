import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductContainer from '../../containers/ProductContainer/ProductContainer.jsx';
import PopularDishesMenu from '../../containers/PopularDishesMenu/PopularDishesMenu.jsx';

const Product = () => {
  return (
    <div className={`${styles.Product} main`} data-testid="Product">
      <ProductContainer />
      <PopularDishesMenu />
    </div>
  );
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
