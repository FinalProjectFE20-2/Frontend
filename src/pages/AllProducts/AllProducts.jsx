import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { addToCart } from '@/store/action/cart/cart';
import { getAllProductsFetch } from '@/store/action/product/actionProduct';
import FilterCategories from '@/components/FilterCategories/FilterCategories';
import Sorting from '@/components/Sorting/Sorting';
import ProductCard from '@/components/ProductCard/ProductCard';
import Pagination from '@/components/Pagination/Pagination';
import styles from './AllProducts.module.scss';

const PRODUCTS_PER_PAGE = 12;

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [totalPagesPagination, setTotalPagesPagination] = useState([]);
  const [currentPagePagination, setCurrentPagePagination] = useState(1);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items);
  const productsFromStore = useSelector(state => state.products.allProducts || []);
  const openModalRef = useRef(null);

  useEffect(() => { //отправляем запрос на сервер
    dispatch(getAllProductsFetch());
  }, [dispatch]);

  useEffect(() => {
    setProducts(productsFromStore); // получаем с сервера все продукты
    setCategories(Array.from(new Set(productsFromStore.map(item => item.categories)))); // получаем все категории продуктов
  }, [productsFromStore]);

  useEffect(() => { // фильтруем продукты по категориям
    setProducts(filteredCategories.length
      ? productsFromStore.filter(item => filteredCategories.includes(item.categories))
      : productsFromStore
    )
  }, [filteredCategories]);

  useEffect(() => { // показываем 12 блюд
    setShowProducts(products.slice((currentPagePagination - 1) * PRODUCTS_PER_PAGE, currentPagePagination * PRODUCTS_PER_PAGE))
  }, [products, currentPagePagination]);

  useEffect(() => { // получаем массив страниц пагинации
    const temp = [];
    for (let index = 1; index <= Math.ceil(products.length / PRODUCTS_PER_PAGE); index++) {
      temp.push(index)
    };
    setTotalPagesPagination(temp);

    setCurrentPagePagination(1); // переходим на 1 страницу при изменении кол-ва блюд
  }, [products]);

  useEffect(() => { // закрывать модалку, если кликнуть вне ее
    function handleClickOutside(event) {
      if (openModalRef.current && !openModalRef.current.contains(event.target)) {
        setVisibleFilter(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const sortPrices = (value) => {
    setProducts( value === 'ascending'
      ? [...products.sort((a, b) => a.previousPrice - b.previousPrice)]
      : [...products.sort((a, b) => b.previousPrice - a.previousPrice)]
    );
  }

  const handleAddToCard = obj => {
    dispatch(addToCart(obj));
  };

  console.log(visibleFilter)

  return (
    <div className={`container main ${styles.newContainer}`}>
      <h1 className={styles.title}>Всі страви</h1>

      <div className={styles.sortingContainer}  ref={openModalRef}>
        <button
          className={`${styles.filterBtn} ${visibleFilter ? styles.isActive : ''}`}
          onClick={() => setVisibleFilter(!visibleFilter)}
        >
          Категорії меню
        </button>
        {visibleFilter &&
          <div className={styles.categoriesModal}>
            <FilterCategories
              categories={categories}
              filteredCategories={filteredCategories}
              setFilteredCategories={setFilteredCategories}
            />
          </div>
        }
        <Sorting onSortPrices={sortPrices}/>
      </div>

      <div className={styles.innerContainer}>
        <div className={styles.categories}>
          <FilterCategories
            categories={categories}
            filteredCategories={filteredCategories}
            setFilteredCategories={setFilteredCategories}
          />
        </div>


        {products?.length
        ? (<ul className={styles.grid}>
            {showProducts?.map(item => (
              <ProductCard
                onClickAddCart={handleAddToCard}
                key={item.itemNo}
                itemNo={item.itemNo}
                propsProduct={item}
                addedCount={
                  cartItems[item.itemNo] && cartItems[item.itemNo].items.length
                }
              />
            ))}
          </ul>
        ) : (
          <h2 className={styles.infoBanner}>
            Товари для цієї категорії тимчасово відсутні!
          </h2>
        )}
      </div>

      <Pagination
        currentPagePagination={currentPagePagination}
        totalPagesPagination={totalPagesPagination}
        setCurrentPagePagination={setCurrentPagePagination}
      />
    </div>
  );
};

