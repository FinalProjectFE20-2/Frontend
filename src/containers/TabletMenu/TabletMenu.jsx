import styles from './TabletMenu.module.css';
import Action from './Action/Action.jsx';

export default function TabletMenu() {
  return (
    <div className={styles.wrapper}>
      <Action upPrice={30} downprice={20} />
    </div>
  );
}
