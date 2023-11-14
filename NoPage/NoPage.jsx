import PropTypes from 'prop-types';
import styles from './NoPage.module.scss';

const NoPage = () => (
  <section className='container' data-testid="NoPage">
    <h2 className={styles.title}>Page 404</h2>
    <p className='text-error'>Упс, але щось пішло не так</p>
    <p className='text-info'>Почнемо спочатку</p>
    <p className='text-homecoming'><Link to="/" target="_blank">Повернімося на попередню сторінку</Link></p>
  </section>
);

NoPage.propTypes = {};

NoPage.defaultProps = {};

export default NoPage;
