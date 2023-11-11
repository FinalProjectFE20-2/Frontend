import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.scss'
import cartEmptyImg from '../../assets/svg_icon/emptycart.svg';

const CartEmpty = () => {
  return (
    <>
      <div className={styles.empty}>
        <h2>
          Нажаль, корзина порожня <icon>😕</icon>
        </h2>
        <p>
          Зробіть, будь-ласка, замовлення.
          <br />
          Для цього перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" >
          <div className={styles.button}>На головну сторінку</div>
        </Link>
        <Link to="/cart/checkout" >
          <div className={styles.button}>Оформити замовлення</div>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;