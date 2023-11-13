import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.scss';
import { login } from '../../store/action/session/actionSession';
import { useDispatch } from 'react-redux';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short').required('required'),
});
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async ({ confirmPassword, ...rest }) => {
          console.log(rest);
          try {
            dispatch(login(rest));
          } catch (err) {
            console.log(err);
          }
        }}>
        {({ errors, touched, isValidating }) => (
          <Form className={styles.loginForm}>
            <Field name="email" placeholder="Email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
