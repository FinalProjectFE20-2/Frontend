import PropTypes from 'prop-types';
import Cart from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './ProductContainer.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { incrementAC, decrementAC } from '@/store/action/counterAction';

const ProductContainer = ({productId}) => {
  const products = useSelector(state => state.products.products || []);
  const product = products.find(product => product.itemNo===productId);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAC());
  const decrement = () => dispatch(decrementAC());

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

          <div className={styles.desc__counter}>
            <div className={styles.counter__group}>
              <button onClick={decrement} className={`${styles.counter__btn} ${styles.btn__minus}`}>-</button>
              <input className={styles.counter__input} type='number' placeholder={counter}/>
              <button onClick={increment} className={`${styles.counter__btn} ${styles.counter__btn} ${styles.btn__plus}`}>+</button>
            </div>
            <p className={styles.desc__price}>₴ {(!product.currentPrice && product.previousPrice)*counter},00</p>
            <button><Cart className='svg'/></button>
          </div>
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
