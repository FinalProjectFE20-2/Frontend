import PropTypes from 'prop-types';

export default function HeaderContainer({ children, classAdd }) {
  return <div className={`container ${classAdd}`}>{children}</div>;
}
HeaderContainer.propTypes = {
  children: PropTypes.node,
};
