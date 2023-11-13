import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../components/Logo/Logo';

const Footer = () => (
  <section className={styles.Footer} data-testid="Footer">
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <Logo />
          <nav>
            <ul className={styles.links}>
              <li>
                <Link to="/" className={styles.link}>
                  Зворотній зв'язок
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.link}>
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
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
        <ul className={styles.social}>
            <li><a href="#" className={`${styles.socialItem} svg ${styles.inst}`}></a></li>
            <li><a href="#" className={`${styles.socialItem} svg ${styles.fb}`}></a></li>
            <li><a href="#" className={`${styles.socialItem} svg ${styles.linkin}`}></a></li>
            <li><a href="https://github.com/FinalProjectFE20-2/Frontend" className={`${styles.socialItem} svg ${styles.git}`}></a></li>
        </ul>
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
