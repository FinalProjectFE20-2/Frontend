import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from '../../store/action/orderListActon/orderListActon';
import styles from './OrderList.module.scss';

function OrderList() {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.order.orderList);
  console.log(orderList, 'OrderList');
  useEffect(() => {
    dispatch(getOrderList());
  }, []);
  return (
    <div className={`${styles.order} container main`}>
      <h1 className={styles.title}>Історія замовлень</h1>
    </div>
  );
}

export default OrderList;
