import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Registration.module.scss';
import { singUp } from '../../store/action/session/actionSession';
import { ImEye } from 'react-icons/im';
import { ImEyeBlocked } from 'react-icons/im';
import { redirect, useNavigate } from 'react-router';

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
    <div>
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
              <Field name="firstName" placeholder="First Name" />
              {errors.firstName && touched.firstName && (
                <div className={styles.errors}>{errors.firstName}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field name="lastName" placeholder="Last Name" />
              {errors.lastName && touched.lastName && (
                <div className={styles.errors}>{errors.lastName}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}
            </div>
            <div className={styles.Field}>
              <Field
                name="password"
                placeholder="Password"
                type={isPasswordShown ? 'text' : 'password'}
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
                placeholder="Confirm Password"
                type={isPasswordShown ? 'text' : 'password'}
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
              <Field name="login" placeholder="login" />
              {errors.login && touched.login && (
                <div className={styles.errors}>{errors.login}</div>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Registration;
