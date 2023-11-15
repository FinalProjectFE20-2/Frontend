import styles from './TabletMenu.module.scss';
import Action from './Action/Action.jsx';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer.jsx';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <HeaderContainer>
        <ProductsCatigories />
      </HeaderContainer>
    </div>
  );
}
