import styles from './CategoriesMenu.module.scss';
import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';
import Burger from '@/assets/icons/Burger.svg?react';
import Categories from '../Categories/Categories.jsx';
import TabletMenu from '../../containers/TabletMenu/TabletMenu.jsx';
import {useDispatch, useSelector} from "react-redux";
import {setIsOpen} from "../../store/action/categories/actionCategories.js";

export default function CategoriesMenu() {
  const isOpen = useSelector(state=>state.categories.isOpen)
    const dispatch = useDispatch()
    const isTablet = useMediaQuery({
        minWidth: 468,
        maxWidth: 1200,
    });
    const isDeckstop = useMediaQuery({
        minWidth: 1200,
    });
    const handleClick = () => {
        dispatch(setIsOpen())
    };
    const menu = isTablet ? <TabletMenu/> : <Categories/>;
    return (
        <>
            <div className={styles.wrapper}>
                <Burger onClick={handleClick}/>
                <h2 className={styles.title}>МЕНЮ</h2>
                {isOpen && menu}
            </div>
            {isDeckstop && <Categories/>}
        </>
    );
}
