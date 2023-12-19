import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Registration.module.scss';
import { singUp } from '../../store/action/session/actionSession';
import { ImEye } from 'react-icons/im';
import { ImEyeBlocked } from 'react-icons/im';
import { redirect, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short').required('required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  login: Yup.string().min(3, 'Too Short').required('required'),
});
const Registration = () => {
  const [isPasswordShown, setPasswordShown] = useState(false);
  const error = useSelector(state => state.session.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="main">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          login: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async ({ confirmPassword, ...rest }) => {
          try {
            const res = await dispatch(singUp(rest));
            // if (res) {
            navigate('/login');
            // }
          } catch (err) {
            console.log(err);
          }
        }}>
        {({ errors, touched }) => (
          <Form className={styles.singUpForm}>
            <div className={styles.Field}>
              <Field
                name="firstName"
                placeholder="Ім'я"
                className={styles.input}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errors}>{errors.firstName}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field
                name="lastName"
                placeholder="Прізвище"
                className={styles.input}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.errors}>{errors.lastName}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field
                name="email"
                placeholder="Email"
                className={styles.input}
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
                className={styles.input}
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
            <div className={styles.Field}>
              <Field
                name="confirmPassword"
                placeholder="Підтвердіть пароль"
                type={isPasswordShown ? 'text' : 'password'}
                className={styles.input}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className={styles.errors}>{errors.confirmPassword}</div>
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
            <div className={styles.Field}>
              <Field
                name="login"
                placeholder="Логін"
                className={styles.input}
              />
              {errors.login && touched.login && (
                <div className={styles.errors}>{errors.login}</div>
              )}
            </div>
            <button type="submit" className="btn btn-light">
              Відправити
            </button>
            <p>
              Вже зареєстровані <NavLink className={styles.link} to="/login">Увійти</NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Registration;
