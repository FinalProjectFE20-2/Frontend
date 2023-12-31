import { useState, useEffect } from 'react';
import styles from './Checkout.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    if (user) {
      if (!email) {
        setEmail(user.email);
      }
      document.getElementById('nameGuestInput').value =
        `${user.firstName} ${user.lastName}`;
      document.getElementById('emailGuestInput').value = user.email;
    }
  }, [user, email]);

  const handleDeliveryMethodChange = method => {
    setDeliveryMethod(method);
  };

  const handlePaymentMethodChange = method => {
    setPaymentMethod(method);
  };

  const handleEmailChange = event => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);
  };
  const [phone, setPhone] = useState('');
  const handlePhoneChange = event => {
    const inputValue = event.target.value;
    const validCharactersRegex = /^[0-9\s-]+$/;
    if (validCharactersRegex.test(inputValue)) {
      setPhone(inputValue);
    }
  };

  const handleOrderButtonClick = () => {
    const nameInputValue = document.getElementById('nameGuestInput').value;
    const phoneInputValue = document.getElementById('phoneGuestInput').value;

    if (nameInputValue && phoneInputValue && deliveryMethod) {
      navigate('/thank');
    } else {
      alert('Введіть контактні дані, та Спосіб доставки');
    }
  };

  return (
    <div className="container">
      <div className={styles.containerCheckoutKosss}>
        <div className={styles.titleCheckoutKosss}>
          <h1>Оформлення замовлення</h1>
          <Breadcrumbs />
        </div>

        <div className={styles.detailsCheckoutKosss}>
          <div className={styles.detailsContactCheckoutKosss}>
            <h2>01. Контактні данні</h2>
            <div className={styles.contentContactCheckoutKosss}>
              <p>
                <u>
                  <span style={{ cursor: 'pointer' }}>Вже купляли у нас?</span>
                </u>
              </p>
              <p>
                Увійдіть до особистого кабінету, та всі ваші дані заповняться
                автоматично
              </p>
              <div className={styles.guestNameWraperInput}>
                <input type="text" required id="nameGuestInput" />
              </div>
              <div className={styles.guestPhoneWraperInput}>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  id="phoneGuestInput"
                />
              </div>
              <div className={styles.guestEmailWraperInput}>
                <input
                  type="email"
                  value={email}
                  id="emailGuestInput"
                  onChange={handleEmailChange}
                />
                {!isEmailValid && (
                  <p style={{ color: 'red', margin: 0 }}>
                    Введіть коректну адресу електронної пошти{' '}
                  </p>
                )}
              </div>
              <div className={styles.guestNumberWraperInput}>
                <input type="number" placeholder="" min="1" max="30" />
              </div>
            </div>
          </div>

          <div className={styles.detailsDeliveryCheckoutKosss}>
            <h2>02. Спосіб доставки</h2>
            <div className={styles.typeDeliveryCheckoutKosss}>
              <div
                className={`${styles.deliveryOptionCheckoutKosss} ${
                  deliveryMethod === 'delivery' ? styles.active : ''
                }`}
                onClick={() => handleDeliveryMethodChange('delivery')}>
                <div className={styles.typeDeliveryCostDelivery}>
                  <p>Доставка кур'єрем</p> <h3>100 грн</h3>
                </div>
                <span>
                  Доставка по Києву <br />
                  Здійснюється щодня з 12:00 до 22:00 <br /> Діапозон часу від 1
                  до 1,5 години
                </span>
              </div>
              <div
                className={`${styles.deliveryOptionCheckoutKosss} ${
                  deliveryMethod === 'pickup' ? styles.active : ''
                }`}
                onClick={() => handleDeliveryMethodChange('pickup')}>
                <div className={styles.typeDeliveryCostDelivery}>
                  <p>Самовивіз</p> <h3>0 грн</h3>
                </div>
                <span>
                  Після підтвердження замовлення <br /> Доступний з 12:00 до
                  22:00 <br /> За адресою пр. Степана Бандери, 125
                </span>
              </div>
            </div>
            <div className={styles.deliveryInputCheckoutKosss}>
              <div className={styles.guestAdressWraperInput}>
                <input type="text" required />
              </div>
              <div className={styles.numberAppCheckoutKosss}>
                <input type="text" placeholder="" required />
                <input type="number" placeholder="" required />
              </div>
              <div className={styles.guestComentWraperInput}>
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>

          <div className={styles.detailsPaymentCheckoutKosss}>
            <h2>03. Оплата</h2>
            <div
              className={`${styles.paymentOptionCheckoutKosss} ${
                paymentMethod === 'cash' ? styles.active : ''
              }`}
              onClick={() => handlePaymentMethodChange('cash')}>
              <p>Готівкою кур'єру</p>
            </div>
            <div
              className={`${styles.paymentOptionCheckoutKosss} ${
                paymentMethod === 'card' ? styles.active : ''
              }`}
              onClick={() => handlePaymentMethodChange('card')}>
              <p>Картою кур'єру</p>
            </div>
          </div>
        </div>

        <button
          className={styles.confirmButtonCheckoutKosss}
          onClick={() => {
            handleOrderButtonClick();
          }}>
          Замовити
        </button>
      </div>
    </div>
  );
};

export default Checkout;
