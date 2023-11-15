import PropTypes from 'prop-types';
import Cart from '@/assets/svg_icon/navigation/Basket.svg?react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const ProductCard = ({ itemNo }) => {
  const products = useSelector(state => state.products.products || []);
  const product = products.find(product => product.itemNo === itemNo);
  // console.log(product, 11);
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      {product.imageUrls?.length > 0 && (
        <Link to={`/product/${product.itemNo}`} className={styles.imgBox}>
          <img
            className={styles.img}
            src={product?.imageUrls[0]}
            alt={product?.name}
          />
        </Link>
      )}
      <h4 className={styles.title}>{product?.name}</h4>
      <p className={styles.weight}>{product.sizes}</p>
      <p className={styles.info}>{product.manufacturer}</p>
      <div className={styles.footer}>
        <p className={styles.price}>&#8372; {product.previousPrice},00</p>
        {!!product.currentPrice && <p>&#8372; {product.currentPrice},00</p>}
        <button className={styles.btnCart}>
          <Cart className="" />
        </button>
      </div>
    </li>
  );
};

ProductCard.propTypes = { itemNo: PropTypes.string };

export default ProductCard;
