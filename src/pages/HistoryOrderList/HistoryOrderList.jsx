import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderList } from '../../store/action/orderListActon/orderListActon';
const HistoryOrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderList());
  }, []);
  return <div>HistoryOrderList</div>;
};
export default HistoryOrderList;
