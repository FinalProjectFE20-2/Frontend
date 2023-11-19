import { Link } from 'react-router-dom';
import Icon from '@/assets/svg_icon/logo.svg?react';
import styles from './Logo.module.scss'
export default function Logo() {
  return (
    <Link to={'/'} className='svg'>
      <Icon className={styles.icon} />
    </Link>
  );
}
