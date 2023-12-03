import styles from './Discounts.module.scss';
import Slider from '../../components/Slider/Slider.jsx';

const Discounts = () => (
  <section
    className={`${styles.discounts} container`}
    data-testid="Discounts">
    <h2 className={styles.title}>Акційні пропозиції</h2>
    <div className={styles.slider} >
    <Slider />
    </div>
  </section>
);

export default Discounts;
