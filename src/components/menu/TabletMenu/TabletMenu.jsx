import styles from './TabletMenu.module.scss';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories.jsx';
import HeaderContainer from '../../HeaderContainer/HeaderContainer.jsx';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer classAdd={'wrapper'}>
        <ProductsCatigories />
      </HeaderContainer>
    </div>
  );
}
