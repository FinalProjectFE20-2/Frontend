import styles from './TabletMenu.module.css';
import Action from './Action/Action.jsx';
import ProductsCatigories from './ProductsCatigories/ProductsCatigories';
<<<<<<< HEAD
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
=======
import PageContainer from '../../components/PageConteiner/PageContainer.jsx';
>>>>>>> dev

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <PageContainer>
        <ProductsCatigories />
      </PageContainer>
    </div>
  );
}
