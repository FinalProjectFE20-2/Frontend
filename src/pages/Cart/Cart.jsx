import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import CartItem from '@/components/CartItem/CartItem.jsx';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/action/cart/cart';

const Cart = () => {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedCart = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const onRemoveItem = id => {
    dispatch(removeCartItem(id));
  };

  return (
    <div>
      <div className="container main">
        <div className={styles.title}>
          <h1>Корзина</h1>
          <h3>
            {' '}
            Home / <span className={styles.route_active}>Product</span>
          </h3>
        </div>
        {totalCount ? (
          <>
            <ul className={styles.list}>
              <li>Блюдо:</li>
              <li>Ціна:</li>
              <li>Кількість:</li>
              <li>Сума:</li>
            </ul>
            <div className="content__items">
              {addedCart.map(obj => (
                <CartItem
                  key={obj.id}
                  id={obj.id}
                  name={obj.name}
                  price={obj.price}
                  size={obj.size}
                  imageUrl={obj.imageUrl}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  onRemove={onRemoveItem}
                  // onMinus={onMinusItem}
                  // onPlus={onPlusItem}
                />
              ))}
            </div>
            <div className={styles.cart__bottom}>
              <div className={styles.cart__bottomDetails}>
                <p>
                  Кількість замовлень: <b>{totalCount} шт</b>
                </p>
                <p>
                  Сума замовлення: <b>{totalPrice} &#8372;</b>
                </p>
              </div>
              <Link to="/cart/checkout">
                <button className={styles.button}>Оформити замовлення</button>
              </Link>
            </div>
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

export default Cart;
