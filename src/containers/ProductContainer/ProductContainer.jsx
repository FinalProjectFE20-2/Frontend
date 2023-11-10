import PropTypes from 'prop-types';
import Basket from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './ProductContainer.module.scss';
import { useSelector } from 'react-redux';

const ProductContainer = ({productId}) => {
  const products = useSelector(state => state.products.products || []);
  const product = products.find(product => product.productId===productId);
  console.log(product);

  return(
    <section className={`${styles.productContainer} container`}>
      <h2 className={styles.title}>Хінкали смажені ${productId}</h2>
      <h3 className={styles.route_road}> Home / <span className={styles.route_active}>Product</span></h3>
      <div className={styles.grid}>
        <div>
          <img className={styles.img} src="./img/img1.jpg" alt="dish 1" />
        </div>
        <div className={styles.desc__box}>
          <p className={styles.mgb}><span className={styles.desc__title}>Вага: </span><span className={styles.desc__info}>250 г</span></p>

          <div className={styles.mgb}>
            <p className={styles.desc__title}>Опис:</p>
            <p className={styles.desc__info}>Плотно-шелковые хинкали с сочной начинкой на выбор: из фермерской говядины, сыра моцарелла либо фермерской баранины и экологически чистой зелени</p>
          </div>

          <p className={styles.mgb}><span className={styles.desc__title}>Ціна: </span><span className={styles.desc__info}>250 грн.</span></p>

          <div className={styles.desc__counter}>
            <div className={styles.counter__group}>
              <button className={`${styles.counter__btn} ${styles.btn__minus}`}>-</button>
              <input className={styles.counter__input} type='number' placeholder='1'/>
              <button className={`${styles.counter__btn} ${styles.counter__btn} ${styles.btn__plus}`}>+</button>
            </div>
            <p className={styles.desc__price}>₴ 250,00</p>
            <button><Basket className='svg'/></button>
          </div>
        </div>
      </div>
    </section>
  )
}


ProductContainer.propTypes = {};

ProductContainer.defaultProps = {};

export default ProductContainer;
