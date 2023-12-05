import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPagePagination, totalPagesPagination, setCurrentPagePagination }) => {
  const [showPagination, setShowPagination] = useState([]);

  useEffect(() => { // показываем +/-1 страницу от текущей, а также первую и последнюю
    const MAX_PAGES = 5;
    if (totalPagesPagination.length > MAX_PAGES) {
      let tempArr = [];
      if (currentPagePagination === 1) {
        tempArr = [1, 2, '. . .', totalPagesPagination.length];
      } else if (currentPagePagination === totalPagesPagination.length) {
        tempArr = [1, '. . .', totalPagesPagination.length - 1, totalPagesPagination.length];
      } else {
        const nearCurrent = [currentPagePagination - 1, currentPagePagination, currentPagePagination + 1];
        const availablePages = new Set([1, totalPagesPagination.length, ...nearCurrent]);
        tempArr = Array.from(availablePages).sort((a, b) => a - b);

        if (tempArr[1] !== 2) {
          tempArr.splice(1, 0, '. . .');
        }
        if (tempArr[tempArr.length - 2] !== totalPagesPagination.length - 1) {
          tempArr.splice(tempArr.length - 1, 0, '. . .');
        }
      }
      setShowPagination(tempArr);
    } else {
      setShowPagination(totalPagesPagination);
    }
  }, [totalPagesPagination, currentPagePagination]);

  const decreasePage = () => {
    setCurrentPagePagination(currentPagePagination - 1)
  }

  const changePage = (number) => {
    setCurrentPagePagination(number)
  }

  const increasePage = () => {
    setCurrentPagePagination(currentPagePagination + 1)
  }

  return (
    <div className={styles.container}>
      <button
        disabled={currentPagePagination < 2}
        onClick={() => decreasePage()}
        className={`${styles.btn} ${currentPagePagination < 2 ? styles.disabled : ''}`}
      >
        {'<'}
      </button>
      {showPagination.map((item, index) => (
        <React.Fragment key={item + index}>
          {item === '. . .' ? (
            <span className={styles.ellipsis}>{item}</span>
          ) : (
            <button
              onClick={() => changePage(item)}
              className={`${styles.btn} ${currentPagePagination === item ? styles.highlighted : ''}`}
            >
              {item}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        disabled={currentPagePagination == totalPagesPagination.length}
        onClick={() => increasePage()}
        className={`${styles.btn} ${currentPagePagination == totalPagesPagination.length ? styles.disabled : ''}`}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
