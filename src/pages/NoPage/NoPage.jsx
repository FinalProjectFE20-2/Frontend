import PropTypes from 'prop-types';
import styles from './NoPage.module.scss';

const NoPage = () => (
  <section className='container' data-testid="NoPage">
    <h2 className={styles.title}>Page 404</h2>
  </section>
);

NoPage.propTypes = {};

NoPage.defaultProps = {};

export default NoPage;
