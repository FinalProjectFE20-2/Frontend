import React, { useState } from 'react';

import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';

import styles from './Checkout.scss';



const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div>
      <Header />
      <div className="container__checkout_kosss">
        <div className="title__checkout_kosss">
          <h1>Оформлення замовлення</h1>
          <p>Головна  /  Корзина  / <span style={{ color: '#9EA2AA' }}>Оформлення замовлення</span></p>
        </div>

        <div className="details__checkout_kosss">
          <div>
            <h2>01. Контактні данні</h2>
            <p><u>Вже купляли у нас?</u></p>
            <p>Увійдіть до личного кабинету, та всі ваші данні автоматично заповняться</p>
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <input type="email" placeholder="" />
            <input type="number" placeholder="" min="1" max="30" />
          </div>

          <div>
            <h2>02. Спосіб доставки</h2>
            <div
              className={`delivery-option__checkout_kosss ${deliveryMethod === 'delivery' ? 'active' : ''}`}
              onClick={() => handleDeliveryMethodChange('delivery')}
            >
              <p>Безконтактна доставка 100грн</p>
            </div>
            <div
              className={`delivery-option__checkout_kosss ${deliveryMethod === 'pickup' ? 'active' : ''}`}
              onClick={() => handleDeliveryMethodChange('pickup')}
            >
              <p>Самовивіз 0 грн</p>
            </div>
          </div>

          <div>
            <h2>03. Оплата</h2>
            <div
              className={`payment-option__checkout_kosss ${paymentMethod === 'cash' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('cash')}
            >
              <p>Налічними кур'єру</p>
            </div>
            <div
              className={`payment-option__checkout_kosss ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('card')}
            >
              <p>Картою кур'єру</p>
            </div>
          </div>
        </div>

        <button className="confirm-button__checkout_kosss">Замовити</button>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
