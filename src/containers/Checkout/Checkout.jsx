import React, { useState } from 'react';

import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';

import './Checkout.scss';



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
          <p>Головна / Корзина / <span style={{ color: '#9EA2AA' }}>Оформлення замовлення</span></p>
        </div>

        <div className="details__checkout_kosss">
          <div className="details_contact__checkout_kosss">
            <h2>01. Контактні данні</h2>
            <div className="content_contact__checkout_kosss">
              <p><u><span style={{ cursor: 'pointer' }}>Вже купляли у нас?</span></u></p>
              <p>Увійдіть до личного кабинету, та всі ваші  данні заповняться автоматично</p>
              <div className="guest-name__wraper_input">
                <input type="text" />
              </div>
              <div className="guest-phone__wraper_input">
                <input type="text" />
              </div>
              <div className="guest-email__wraper_input">
                <input type="email" placeholder="" />
              </div>
              <div className="guest-number__wraper_input">
                <input type="number" placeholder="" min="1" max="30" />
              </div>
            </div>
          </div>

          <div className="details_delivery__checkout_kosss">
            <h2>02. Спосіб доставки</h2>
            <div className="type_delivery__checkout_kosss">
              <div
                className={`delivery-option__checkout_kosss ${deliveryMethod === 'delivery' ? 'active' : ''}`}
                onClick={() => handleDeliveryMethodChange('delivery')}
              >
                <div className="type_delivery__cost_delivery"><p>Безконтактна доставка</p> <h3>100 грн</h3></div>
                <span>Доставка по Києву <br />Здійснюється: щодня з 12:00 до 22:00 <br /> Діапозон часу: від 1 до 1.5 годин</span>
              </div>
              <div
                className={`delivery-option__checkout_kosss ${deliveryMethod === 'pickup' ? 'active' : ''}`}
                onClick={() => handleDeliveryMethodChange('pickup')}
              >
                <div className="type_delivery__cost_delivery"><p>Самовивіз</p> <h3>0 грн</h3></div>
                <span>Після підтвердження замовлення <br /> Доступний з 12:00 до 22:00 <br /> За адресою вул. Степана Бандери, 125</span>
              </div>
            </div>
              <div className="delivery-input__checkout_kosss">
                <div className="guest-adress__wraper_input">
                  <input type="text" />
                </div>
              <div className="number-app__checkout_kosss">
                <input type="text" placeholder="" />
                <input type="number" placeholder="" />
              </div >
              <div className="guest-coment__wraper_input">
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>

          <div className="details_payment__checkout_kosss">
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
      <div className="go_cart__checkout_kosss">
        <div>1
 
        </div>
        <div><h3>Ваше замовлення тут :)</h3></div>
        <div><p>Розкрити</p></div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
