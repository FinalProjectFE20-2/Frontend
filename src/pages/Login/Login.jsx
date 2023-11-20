import { redirect, useNavigate } from 'react-router';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import styles from './Login.module.scss';
import { login } from '../../store/action/session/actionSession';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short').required('required'),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            console.log(res);
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
                type="password"
                className={styles.password}
              />
              {errors.password && touched.password && (
                <div className={styles.errors}>{errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-light">
              Відправити
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
