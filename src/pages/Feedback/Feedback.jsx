import React, { useState } from 'react';
import './Feedback.scss';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Простая проверка на валидность email
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);
  };

  const handleSubmit = () => {
    // Здесь можете добавить логику отправки формы
    // например, вызовом функции, которая обрабатывает данные формы
  };

  return (
    <div className="container">
      <div className="container__feedback_kosss">
        <div className="title__feedback_kosss">
          <h1>Зворотній зв'язок</h1>
          <p>Головна / <span style={{ color: '#9EA2AA' }}>Зворотній зв'язок</span></p>
        </div>
        <div className="form__feedback_kosss">
          <div className="coment__feedback_kosss">
            <input type="text" />
          </div>
          <div className="email__feedback_kosss">
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
          <button className="confirm-button__feedback_kosss" onClick={handleSubmit}>
            Надіслати
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
