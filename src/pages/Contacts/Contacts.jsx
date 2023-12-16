import React, { useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const containerStyle = {
    width: '600px',
    height: '400px',
  };

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.489557, lng: 30.490599 },
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: { lat: 50.489557, lng: 30.490599 },
        map: map,
        title: 'Київ, проспект Степана Бандери, буд 125',
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCfqu9rwI_23RFnVD66Lq7UBNJQP98rBkg&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="container main">
      <div className={styles.containerContactsKosss}>
        <div className={styles.titleContactsKosss}>
          <h1>Контакти</h1>
        </div>

        <div className={styles.detailesContactsKosss}>
          <div className={styles.mapContactsKosss} id="map"></div>
          <div className={styles.descriptionContactsKosss}>
            <h2>Ми знаходимся:</h2>
            <p>Київ, проспект Степана Бандери, буд 125</p>
            <h2>Режим роботи:</h2>
            <p>11:00 - 23:00 </p>
            <h2>Номер телефону:</h2>
            <a href="tel:+380938416729" className={styles.link}>
              +38 (093) 841-67-29
            </a>
            <h2>Email:</h2>
            <a href="mailto: delivery@midas.rest" className={styles.link}>
              delivery@midas.rest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
