import styles from './CategoriesMenu.module.scss';
import {useMediaQuery} from 'react-responsive';
import {useEffect} from 'react';
import Burger from '@/assets/icons/Burger.svg?react';
import Close from '@/assets/icons/Close.svg?react';
import Categories from '../Categories/Categories.jsx';
import TabletMenu from '../../containers/TabletMenu/TabletMenu.jsx';
import {useDispatch, useSelector} from "react-redux";
import {setIsOpen} from "../../store/action/categories/actionCategories.js";

export default function CategoriesMenu() {
    const isOpen = useSelector(state => state.categories.isOpen)
    const dispatch = useDispatch()
    const isTablet = useMediaQuery({
        minWidth: 467,
        maxWidth: 1200,
    });
    const isDeckstop = useMediaQuery({
        minWidth: 1200,
    });
    const handleClick = () => {
        dispatch(setIsOpen())
    };
    const menu = isTablet ? <TabletMenu/> : <Categories/>;
    const icon = !isOpen ? <Burger onClick={handleClick}/> : <Close onClick={handleClick}/>;
    useEffect(() => {
        const root = document.getElementById('root')
       let cssValue = isDeckstop && 'height:auto; overflow: scroll;'
        if (typeof cssValue ==='boolean') {
            cssValue = isOpen ? 'height:100vh; overflow: hidden;': 'height:auto; overflow: scroll;'
        }

        root.style.cssText = cssValue;

    }, [isOpen,isDeckstop])

    return (
        <>
            <div className={styles.wrapper}>
                {icon}
                <h2 className={styles.title}>МЕНЮ</h2>
                {isOpen && menu}
            </div>
            {isDeckstop && <Categories/>}
        </>
    );
}
