import cartEmptyImg from '@/assets/icons/EmptyCart.svg';
import CartItem from '@/components/CartItem/CartItem.jsx';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  removeOneProductFromCart,
  addOneProductToCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from '../../store/action/cart/cart';

const Cart = () => {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedCart = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const onRemoveItem = (id, _id) => {
    dispatch(removeProductFromCart(id, _id));
  };

  const onPlusItem = (id, _id) => {
    dispatch(addOneProductToCart(id, _id));
  };

  const onMinusItem = (id, _id) => {
    dispatch(removeOneProductFromCart(id, _id));
  };

  return (
    <div className="container main">
      <div className={styles.title}>
        <h1>Корзина</h1>
        {/*         <h3>
          Home / <span className={styles.route_active}>Cart</span>
        </h3> */}
      </div>
      {totalCount ? (
        <>
          <ul className={styles.list}>
            <li>Страва:</li>
            <li>Ціна:</li>
            <li>Кількість:</li>
            <li>Сума:</li>
          </ul>
          <div className="content__items">
            {addedCart.map(obj => (
              <CartItem
                _id={obj._id}
                key={obj.id}
                id={obj.id}
                name={obj.name}
                price={obj.price}
                size={obj.size}
                imageUrl={obj.imageUrl}
                quantity={obj.quantity}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
          </div>
          <div className={styles.cart__bottom}>
            <div className={styles.cart__bottomDetails}>
              <p>
                Кількість замовлень: <b>{totalCount} шт</b>
              </p>
              <p>
                Сума замовлення: <b>{totalPrice},00 &#8372;</b>
              </p>
            </div>
            <Link to="/cart/checkout">
              <button className={styles.button}>Оформити замовлення</button>
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <h2>Нажаль, корзина порожня 😕</h2>
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
      )}
    </div>
  );
};

export default Cart;
