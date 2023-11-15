import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import styles from './Cart.module.scss';

const Cart = () => (
        <div>
            <div className='container'>
                <div className={styles.title}>
                    <h1>Корзина</h1>
                    <p>Головна  /  Корзина  /</p>
                </div>
                <CartEmpty />
            </div>
        </div>
);

export default Cart;
