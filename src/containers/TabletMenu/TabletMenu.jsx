import styles from './TabletMenu.module.css';
import Action from './Action/Action.jsx';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      {/* <Action upPrice={30} downprice={20} /> */}
      <ProductsCatigories />
    </div>
  );
}
