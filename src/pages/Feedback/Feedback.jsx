import React, { useState } from 'react';
import styles from './Feedback.module.scss';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = event => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);
  };

  const handleSubmit = () => {};

  return (
    <div className="container main">
      <div className={styles.containerFeedbackKosss}>
        <div className={styles.titleFeedbackKosss}>
          <h1>Зворотній зв'язок</h1>
          <p>
            Головна /{' '}
            <span style={{ color: '#9EA2AA' }}>Зворотній зв'язок</span>
          </p>
        </div>
        <div className={styles.formFeedbackKosss}>
          <div className={styles.comentFeedbackKosss}>
            <input type="text" />
          </div>
          <div className={styles.emailFeedbackKosss}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {!isEmailValid && (
              <p style={{ color: 'red', margin: 0 }}>
                Введіть коректну адресу електронної пошти
              </p>
            )}
          </div>
          <button
            className={styles.confirmButtonFeedbackKosss}
            onClick={handleSubmit}>
            Надіслати
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
