import styles from './TabletMenu.module.scss';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer.jsx';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer classAdd={'wrapper'}>
        <ProductsCatigories />
      </HeaderContainer>
    </div>
  );
}
