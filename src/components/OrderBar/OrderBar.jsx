import PropTypes from 'prop-types';
import styles from './OrderBar.module.scss';
import { useState } from 'react';
import Cart from '@/assets/icons/Cart.svg?react';

const OrderBar = ({ productId, currentPrice, previousPrice, quantity }) => {
  const [val, setVal] = useState(1);
  const change = e => {
    if (val < quantity) {
      setVal(Number(e.target.value));
    } else {
      setVal(val);
    }
  };
  const decrement = () => {
    if (val >= quantity) {
      setVal(quantity);
    }
    if (val > 1) {
      setVal(prev => prev - 1);
    }
  };
  const increment = () => {
    if (val < quantity) {
      setVal(prev => prev + 1);
    }
  };

  return (
    <div className={styles.counter} data-testid="OrderBar">
      <div className={styles.group}>
        <button
          onClick={decrement}
          className={`${styles.btn} ${styles.btn__minus}`}>
          -
        </button>
        <input
          onChange={change}
          className={styles.input}
          type="number"
          value={val}
        />
        <button
          onClick={increment}
          className={`${styles.btn} ${styles.btn__plus}`}>
          +
        </button>
      </div>
      <p className={styles.price}>
        ₴ {(!currentPrice && previousPrice) * val},00
      </p>
      <button>
        <Cart className="svg" />
      </button>
    </div>
  );
};

OrderBar.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

OrderBar.defaultProps = {};

export default OrderBar;
