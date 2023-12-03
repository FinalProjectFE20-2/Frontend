import styles from './Footer.module.scss';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Footer = () => (
  <section className={styles.Footer} data-testid="Footer">
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <Logo />
          <nav>
            <ul className={styles.links}>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(255,255,255)',
                }}>
                <Link to="/feedback" className={styles.link}>
                  Зворотній зв'язок
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(255,255,255)',
                }}>
                <Link to="/delivery" className={styles.link}>
                  Доставка та оплата
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px rgb(255,255,255)',
                }}>
                <Link to="/contacts" className={styles.link}>
                  Контакти
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
        <div className={styles.contacts}>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            href="tel:+380938416729"
            className={`${styles.phone} ${styles.link}`}>
            +38 (093) 841-67-29
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
            }}
            href="mailto: delivery@midas.rest"
            className={`${styles.email} ${styles.link}`}>
            delivery@midas.rest
          </motion.a>
        </div>
      </div>
      <hr />
      <div className={styles.wrapperPolitics}>
        <p className={styles.rights}>©2023 «MIDAS», DAN IT</p>
        <ul className={styles.social}>
          <li>
            <motion.a
              href="#"
              className={`${styles.socialItem} svg ${styles.inst}`}
              whileHover={{
                scale: 1.3,
              }}></motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className={`${styles.socialItem} svg ${styles.fb}`}
              whileHover={{
                scale: 1.3,
              }}></motion.a>
          </li>
          <li>
            <motion.a
              href="#"
              className={`${styles.socialItem} svg ${styles.linkin}`}
              whileHover={{
                scale: 1.3,
              }}></motion.a>
          </li>
          <li>
            <motion.a
              href="https://github.com/FinalProjectFE20-2/Frontend"
              className={`${styles.socialItem} svg ${styles.git}`}
              whileHover={{
                scale: 1.3,
              }}></motion.a>
          </li>
        </ul>
        <ul className={styles.politics}>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
            }}>
            <Link to="/politics" className={styles.link}>
              Політика конфіденційності
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255)',
            }}>
            <Link to="/terms" className={styles.link}>
              Угода використання
            </Link>
          </motion.li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
