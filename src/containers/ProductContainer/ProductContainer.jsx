import styles from './ProductContainer.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cart from '@/assets/icons/Cart.svg?react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/action/cart/cart';
import { motion } from 'framer-motion';

const ProductContainer = addedCount => {
  const { productId } = useParams();
  const [item, setitem] = useState([]);
  const dispatch = useDispatch();

  const getProduct = () => {
    axios
      .get(`https://backend-zeta-sandy.vercel.app/api/products/${productId}`)
      .then(response => {
        setitem(response.data);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  const onAddCart = () => {
    const obj = {
      id: productId,
      name: item.name,
      size: item.sizes,
      imageUrl: item.imageUrls,
      price: item.previousPrice,
    };
    onClickAddCart(obj);
  };

  const onClickAddCart = obj => {
    dispatch(addToCart(obj));
  };

  return (
    <section className={`${styles.productContainer} container`}>
      <h2 className={styles.title}>{item.name}</h2>
      {/*       <h3 className={styles.route_road}>
        Home / <span className={styles.route_active}>Product</span>
      </h3> */}
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

          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={onAddCart}
            className={styles.btnCart}>
            <Cart className="svg" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

ProductContainer.defaultProps = {};

export default ProductContainer;
