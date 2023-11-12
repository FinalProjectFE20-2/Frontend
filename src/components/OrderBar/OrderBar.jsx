import React from 'react';
import PropTypes from 'prop-types';
import Cart from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './OrderBar.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { incrementAC, decrementAC } from '@/store/action/counterAction';

const OrderBar = ({productId, currentPrice, previousPrice, quantity}) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAC());
  const decrement = () => dispatch(decrementAC());
  const setValue = () => dispatch(setValueAC());

  return (
    <div className={styles.counter} data-testid="OrderBar">
      <div className={styles.group}>
        <button onClick={decrement} className={`${styles.btn} ${styles.btn__minus}`}>-</button>
        <input  className={styles.input} type='number' value={counter}/> 
        {/* onChange={(e) => {setValue(Number(e.target.value), productId)}} */}
        <button onClick={increment} className={`${styles.btn} ${styles.btn__plus}`}>+</button>
      </div>
      <p className={styles.price}>₴ {(!currentPrice && previousPrice)*counter},00</p>
      <button><Cart className='svg'/></button>
    </div>
  );
}

OrderBar.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

OrderBar.defaultProps = {};

export default OrderBar;
