import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';
import ProductContainer from '../../containers/ProductContainer/ProductContainer.jsx';
import PopularDishesMenu from '../../containers/PopularDishesMenu/PopularDishesMenu.jsx';

const Product = () => {
  const { productId } = useParams();

  return (
    <div className={styles.Product} data-testid="Product">
      <ProductContainer productId={productId} />
      <PopularDishesMenu />
    </div>
  );
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
