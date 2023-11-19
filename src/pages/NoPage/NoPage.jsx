import styles from './NoPage.module.scss';
import { Link } from 'react-router-dom';

const NoPage = () => (
  <section className={`${styles.page} container`} data-testid="NoPage">
    <h2 className={styles.title}>Page 404</h2>
    <p className={styles.textError}>Упс, але щось пішло не так</p>   {' '}
    <p className={styles.textInfo}>Почнемо спочатку</p>   {' '}
    <p className={styles.textHomecoming}>
      <Link to="/">
        Повернімося на <span className={styles.link}>Головну сторінку</span>
      </Link>
    </p>
  </section>
);

NoPage.propTypes = {};

NoPage.defaultProps = {};

export default NoPage;
