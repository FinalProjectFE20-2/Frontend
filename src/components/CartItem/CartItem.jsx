import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';

const CartItem = ({
  _id,
  id,
  name,
  price,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  quantity,
  onRemove,
  onMinus,
  onPlus,
}) => {
  const handleRemoveClick = () => {
    onRemove(id, _id);
  };

  const handlePlusItem = () => {
    onPlus(id, _id);
  };

  const handleMinusItem = () => {
    onMinus(id, _id);
  };

  console.log(_id, id, totalPrice, totalCount, 11111)
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__img}>
        <Link to={`/product/${id}`} className={styles.imgBox}>
          <img src={imageUrl} alt="Food" />
        </Link>
      </div>
      <div className={styles.cartItem__info}>
        <h3>{name}</h3>
        <p className={styles.size}>{size}</p>
      </div>
      <div className={styles.cartItem__price}>
        <p>Ціна:</p>
        <b>{price} &#8372;</b>
      </div>
      <div className={styles.cartItem__count}>
        <button
          onClick={handleMinusItem}
          className={`${styles.counter__btn} ${styles.btn__minus}`}>
          -
        </button>
        <input
          className={styles.counter__input}
          type="number"
          value={totalCount}
          min={1}
          max={quantity}
        />
        <button
          onClick={handlePlusItem}
          className={`${styles.counter__btn} ${styles.counter__btn} ${styles.btn__plus}`}>
          +
        </button>
      </div>
      <div className={styles.cartItem__totalPrice}>
        <p>Сума:</p>
        <b>{totalPrice} &#8372;</b>
      </div>
      <div className={styles.cartItem__remove}>
        <button
          onClick={handleRemoveClick}
          className={styles.cartItem__buttonRemove}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
