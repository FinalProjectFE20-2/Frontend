import { Link } from 'react-router-dom';
import Icon from '@/assets/icons/Logo.svg?react';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link to={'/'} className="svg">
      <Icon className={styles.icon} />
    </Link>
  );
}
