import PropTypes from 'prop-types';
import styles from './NoPage.module.scss';
import { Link } from 'react-router-dom';

const NoPage = () => (
  <section className='container' data-testid="NoPage">
    <h2 className={styles.title}>Page 404</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste assumenda obcaecati repellat beatae quae, reiciendis rem facere porro vel cum distinctio modi aut accusantium aliquid. Tempore aperiam neque debitis et?</p>

    <p>Go to the <Link to="/">Homepage</Link>.</p>
  </section>
);

NoPage.propTypes = {};

NoPage.defaultProps = {};

export default NoPage;
