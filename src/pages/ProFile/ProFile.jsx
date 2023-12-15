import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setToken, setUser } from '../../store/action/session/actionSession';
import { NavLink } from 'react-router-dom';
import styles from './ProFile.module.scss'

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
    <div className={styles.profile}>
      <p className={styles.profileLine}>First name: {user.firstName}</p>
      <p className={styles.profileLine}>Last name: {user.lastName}</p>
      <p className={styles.profileLine}>Login: {user.login}</p>
      <p className={styles.profileLine}>Email: {user.email}</p>
      <NavLink className={styles.profileOrderList} to="/order_history">
        Order list
      </NavLink>
      <button className={styles.profileLogOut} onClick={handelLogout}>
        LogOut
      </button>
    </div>
  );
}

export default ProFile;
