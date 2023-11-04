import React from 'react';
import styles from './Footer.module.scss';
import HeaderLogo from '../Header/components/HeaderLogo/HeaderLogo';

const Footer = () => (
  <section className={styles.Footer} data-testid="Footer">
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <HeaderLogo />
          <div className={styles.links}>
            <a href="#" className={styles.link}>
              Зворотній зв'язок
            </a>
            <a href="#" className={styles.link}>
              Доставка
            </a>
            <a href="#" className={styles.link}>
              Оплата
            </a>
            <a href="#" className={styles.link}>
              Контакти
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
          <a
            href="tel:+380938416729"
            className={`${styles.phone} ${styles.link}`}>
            +38 (093) 841-67-29
          </a>
          <a
            href="mailto: delivery@midas.rest"
            className={`${styles.email} ${styles.link}`}>
            delivery@midas.rest
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.wrapperPolitics}>
        <p className={styles.rights}>©2023 «MIDAS», DAN IT</p>
        <div className={styles.politics}>
          <a href="#" className={styles.link}>
            Політика конфіденційності і оферта
          </a>
          <a href="#" className={styles.link}>
            Угода використання
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
