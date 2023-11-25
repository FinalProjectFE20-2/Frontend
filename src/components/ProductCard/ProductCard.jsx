import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Cart from '@/assets/icons/Cart.svg?react';

const ProductCard = ({ itemNo, onClickAddCart, propsProduct, addedCount }) => {
  const products = useSelector(state => state.products.products || []);
  const product = propsProduct
    ? propsProduct
    : products.find(product => product.itemNo === itemNo);
  const onAddCart = () => {
    const obj = {
      id: parseInt(itemNo),
      name: product.name,
      size: product.sizes,
      imageUrl: product.imageUrls[0],
      price: product.previousPrice,
    };
    onClickAddCart(obj);
  };

  const active = product.currentPrice > 0 ? `${styles.active}` : '';

  return (
    <li className={styles.card}>
      {product.imageUrls?.length > 0 && (
        <Link to={`/product/${product.itemNo}`} className={styles.imgBox}>
          <img
            className={styles.img}
            src={product.imageUrls[0]}
            alt={product.name}
          />
        </Link>
      )}
      <h4 className={styles.title}>{product.name}</h4>
      <p className={styles.weight}>{product.sizes}</p>
      <p className={styles.info}>{product.manufacturer}</p>
      <div className={styles.footer}>
        <p className={`${styles.price} ${active}`}>
          &#8372; {product.previousPrice},00
        </p>
        {!!product.currentPrice && (
          <p className={styles.currentPrice}>
            &#8372; {product.currentPrice},00
          </p>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.btnCart}
          onClick={onAddCart}>
          <Cart />
          {addedCount && <i>{addedCount}</i>}
        </motion.button>
      </div>
    </li>
  );
};

ProductCard.propTypes = { itemNo: PropTypes.string };

export default ProductCard;
