import styles from './Container.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container = ({children}) => (
  <div className={styles.Container} data-testid="Container">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Container;
