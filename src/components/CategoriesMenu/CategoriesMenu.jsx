import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';
import Burger from '@/assets/svg_icon/burger_menu/burger.svg?react';
import TabletMenu from '../../containers/TabletMenu/TabletMenu.jsx';
import styles from './CategoriesMenu.module.scss';
import Categories from '../Categories/Categories.jsx';


export default function CategoriesMenu() {
    const [isOpen, setOpen] = useState(false);
    const isTablet = useMediaQuery({
    minWidth:468,maxWidth:1200
    });
    const isDeckstop = useMediaQuery({
        minWidth:1200
    });
    const handleClick = () => {
        setOpen(prev => !prev);
    };
    const menu = isTablet ? <TabletMenu/> : <Categories/>
    return (
        <>
            <div className={styles.wrapper}>
                <Burger onClick={handleClick}/>
                <h2 className={styles.title}>МЕНЮ</h2>
                {isOpen && menu}
            </div>
            {isDeckstop&&<Categories/>}
        </>
    );
}
