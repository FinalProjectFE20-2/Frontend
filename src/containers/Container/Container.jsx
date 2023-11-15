import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Container = ({ children }) => (
  <div data-testid="Container">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Container;
