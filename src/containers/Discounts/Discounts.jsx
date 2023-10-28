import styles from './Discounts.module.scss';
import Slider from '../../components/Slider/Slider.jsx';

const Discounts = () => (
  <div className={`${styles.Discounts} ${styles.container}`} data-testid="Discounts">
    <h2 className={styles.title} >Акційні пропозиції</h2>
    <Slider />
  </div>
);

export default Discounts;