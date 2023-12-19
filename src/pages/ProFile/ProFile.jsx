import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUser } from '../../store/action/session/actionSession';
import { NavLink } from 'react-router-dom';
import styles from './ProFile.module.scss';

function ProFile() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    sessionStorage.setItem('token', null);
    navigate('/');
  };
  return (
    <div className={`${styles.profile} container main`}>
      <p className={styles.profileLine}>Ім'я: {user.firstName}</p>
      <p className={styles.profileLine}>Прізвище: {user.lastName}</p>
      <p className={styles.profileLine}>Login: {user.login}</p>
      <p className={styles.profileLine}>Email: {user.email}</p>
      <NavLink className={styles.profileOrderList} to="/order_history">
        Історія замовлень
      </NavLink>
      <button className={styles.profileLogOut} onClick={handelLogout}>
        Вихід
      </button>
    </div>
  );
}

export default ProFile;
