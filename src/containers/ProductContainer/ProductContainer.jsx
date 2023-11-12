import PropTypes from 'prop-types';
import styles from './ProductContainer.module.scss';
import OrderBar from '../../components/OrderBar/OrderBar';
import { useSelector } from "react-redux";

const ProductContainer = ({productId}) => {
  const products = useSelector(state => state.products.products || []);
  const product = products.find(product => product.itemNo===productId);

  return(
    <section className={`${styles.productContainer} container`}>
      <h2 className={styles.title}>{product.name}</h2>
      <h3 className={styles.route_road}> Home / <span className={styles.route_active}>Product</span></h3>
      <div className={styles.grid}>
        <div>
          <img className={styles.img} src={product.imageUrls[0]} alt={product.name} />
        </div>
        <div className={styles.desc__box}>
          <p className={styles.mgb}><span className={styles.desc__title}>Вага: </span><span className={styles.desc__info}>{product.sizes}</span></p>

          <div className={styles.mgb}>
            <p className={styles.desc__title}>Опис:</p>
            <p className={styles.desc__info}>{product.manufacturer}</p>
          </div>

          <p className={styles.mgb}><span className={styles.desc__title}>Ціна: </span><span className={styles.desc__info}> {!product.currentPrice && product.previousPrice},00 грн.</span></p>

          <OrderBar productId={productId} currentPrice={product.currentPrice} previousPrice={product.previousPrice} quantity={product.quantity} />
        </div>
      </div>
    </section>
  )
}

ProductContainer.propTypes = {
  productId: PropTypes.number.isRequired,
};

ProductContainer.defaultProps = {};

export default ProductContainer;
