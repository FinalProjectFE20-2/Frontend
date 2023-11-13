import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './SingUp.module.scss';
import { singUp } from '../../store/action/session/actionSession';
import { useDispatch } from 'react-redux';

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
  password: Yup.string().min(2, 'Too Short').required('required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  login: Yup.string().min(3, 'Too Short').required('required'),
});
const SingUp = () => {
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
          console.log(rest);
          try {
          dispatch(singUp(rest));
          } catch (err){
            console.log(err);
          }
        }}>
        {({ errors, touched, isValidating }) => (
          <Form className={styles.singUpForm}>
            <Field name="firstName" placeholder="First Name" />
            {errors.firstName && touched.firstName && (
              <div>{errors.firstName}</div>
            )}

            <Field name="lastName" placeholder="Last Name" />
            {errors.lastName && touched.lastName && (
              <div>{errors.lastName}</div>
            )}

            <Field name="email" placeholder="Email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            <Field
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}

            <Field name="login" placeholder="login" />
            {errors.login && touched.login && <div>{errors.login}</div>}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SingUp;
