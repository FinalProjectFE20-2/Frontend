import PropTypes from 'prop-types';
import styles from './PageContainer.module.css';

export default function PageContainer({ children, classAdd }) {
  return <div className={`${styles.container} ${classAdd}`}>{children}</div>;
}
PageContainer.propTypes = {
  children: PropTypes.node,
};
