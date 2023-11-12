import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

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
  password: Yup.string().password('Invalid password').required('required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  login: Yup.string().login('Invalid login').required('required'),
});
export const SingUp = () => {
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
        onSubmit={async values => {}}>
        {({ errors, touched, isValidating }) => (
          <Form>
            <Field firstName="firstName" validate={validateFirstName} />
            {errors.firstName && touched.firstName && (
              <div>{errors.firstName}</div>
            )}

            <Field lastName="lastName" validate={validateLastName} />
            {errors.lastName && touched.lastName && (
              <div>{errors.lastName}</div>
            )}

            <Field email="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field password="password" validate={validatePassword} />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            <Field
              confirmPassword=" confirmPassword"
              validate={validateConfirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}

            <Field login="login" validate={validateLogin} />
            {errors.login && touched.login && <div>{errors.login}</div>}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
