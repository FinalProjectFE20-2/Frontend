import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';
import cartEmptyImg from '@/assets/icons/EmptyCart.svg';

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
        <Link to="/">
          <div className={styles.button}>На головну сторінку</div>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
