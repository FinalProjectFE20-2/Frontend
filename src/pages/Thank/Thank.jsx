import styles from './Thank.module.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className={`${styles.thank} container main`}>
      <h1 className={styles.title}>
        Дякуємо за замовлення, наш менеджер зв’яжеться з вами
      </h1>
      <Link to="/">
        Повернімося на <span className={styles.link}>Головну сторінку</span>
      </Link>
    </div>
  );
}

export default App;
