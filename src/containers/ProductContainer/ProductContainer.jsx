import PropTypes from 'prop-types';
import styles from './ProductContainer.module.scss';
import OrderBar from '../../components/OrderBar/OrderBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductContainer = () => {
  const { productId } = useParams();
  const [item, setitem] = useState([]);

  const getProduct = () => {
    axios
      .get(`https://backend-zeta-sandy.vercel.app/api/products/${productId}`)
      .then(response => {
        console.log(response.data);
        setitem(response.data);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getProduct();
  }, ' ');

  useEffect(() => {
    getProduct();
  }, productId);

  return (
    <section className={`${styles.productContainer} container`}>
      <h2 className={styles.title}>{item.name}</h2>
      <h3 className={styles.route_road}>
        Home / <span className={styles.route_active}>Product</span>
      </h3>
      <div className={styles.grid}>
        <div>
          <img className={styles.img} src={item.imageUrls} alt={item.name} />
        </div>
        <div className={styles.desc__box}>
          <p className={styles.mgb}>
            <span className={styles.desc__title}>Вага: </span>
            <span className={styles.desc__info}>{item.sizes}</span>
          </p>

          <div className={styles.mgb}>
            <p className={styles.desc__title}>Опис:</p>
            <p className={styles.desc__info}>{item.manufacturer}</p>
          </div>

          <p className={styles.mgb}>
            <span className={styles.desc__title}>Ціна: </span>
            <span className={styles.desc__info}>
              {item.currentPrice || item.previousPrice},00 грн.
            </span>
          </p>

          <OrderBar
            productId={productId}
            currentPrice={item.currentPrice}
            previousPrice={item.previousPrice}
            quantity={item.quantity}
          />
        </div>
      </div>
    </section>
  );
};

ProductContainer.propTypes = {
  productId: PropTypes.string.isRequired,
};

ProductContainer.defaultProps = {};

export default ProductContainer;
