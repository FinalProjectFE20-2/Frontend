import PropTypes from 'prop-types';
import styles from './nopage.module.scss';
import { Link } from 'react-router-dom';

const Nopage = () => (
  <section className='container' data-testid="nopage">
    <h1 className={styles.title}>page 404</h1>
    <p>Упс, але щось пішло не так</p>
    <img src=''></img>
    <p>Почнемо спочатку</p>
    <p><Link to="/" target="_blank">Повернімося на попередню сторінку</Link></p>
  </section>
);

Nopage.propTypes = {};
Nopage.defaultProps = {};

export default Nopage;


