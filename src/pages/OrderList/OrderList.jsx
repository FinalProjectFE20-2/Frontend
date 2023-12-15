import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from '../../store/action/orderListActon/orderListActon';

function OrderList() {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.order.orderList);
  console.log(orderList, 'OrderList');
  useEffect(() => {
    dispatch(getOrderList());
  }, []);
  return <div>OrderList</div>;
}

export default OrderList;
