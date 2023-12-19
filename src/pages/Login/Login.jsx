import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ImEye } from 'react-icons/im';
import { ImEyeBlocked } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import styles from './Login.module.scss';
import { login } from '../../store/action/session/actionSession';
import { NavLink } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short').required('required'),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordShown, setPasswordShown] = useState(false);

  return (
    <div className="main">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async value => {
          try {
            const res = await dispatch(
              login({ loginOrEmail: value.email, password: value.password }),
            );
            if (res) {
              navigate('/');
            }
          } catch (err) {
            console.log(err);
          }
        }}>
        {({ errors, touched }) => (
          <Form className={styles.loginForm}>
            <div className={styles.Field}>
              <Field
                name="email"
                placeholder="Email"
                className={styles.email}
              />
              {errors.email && touched.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field
                name="password"
                placeholder="Пароль"
                type={isPasswordShown ? 'text' : 'password'}
                className={styles.password}
              />
              {errors.password && touched.password && (
                <div className={styles.errors}>{errors.password}</div>
              )}
              {isPasswordShown && (
                <ImEye
                  className={styles.fieldIcon}
                  onClick={() => setPasswordShown(false)}
                />
              )}
              {!isPasswordShown && (
                <ImEyeBlocked
                  className={styles.fieldIcon}
                  onClick={() => setPasswordShown(true)}
                />
              )}
            </div>
            <button type="submit" className="btn btn-light">
              Відправити
            </button>
            <p>
              Не маєте акаунту{' '}
              <NavLink className={styles.link} to="/singUp">
                Зареєструватися
              </NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
