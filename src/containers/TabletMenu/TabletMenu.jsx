import styles from './TabletMenu.module.css';
import Action from './Action/Action.jsx';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <PageContainer>
        <ProductsCatigories />
      </PageContainer>
    </div>
  );
}
