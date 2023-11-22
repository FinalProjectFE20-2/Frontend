import styles from './Search.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchUrl from '@/assets/icons/Search.svg?react';
import SingUp from '@/assets/icons/SingUp.svg?react';
import Cart from '@/assets/icons/Cart.svg?react';
import axios from 'axios';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const totalCount = useSelector(({ cart }) => cart.totalCount);
  const searchResultsRef = useRef(null);
  const debounceTimer = useRef(null);
  const baseUrl = 'https://backend-zeta-sandy.vercel.app/api';
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWM5MDhlMjQ0Mjk2MDAwODdjNjIzYSIsImZpcnN0TmFtZSI6IkFETUlOIiwibGFzdE5hbWUiOiJBRE1JTiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDA1NzQ0MTEsImV4cCI6MTczMjExMDQxMX0.aCfrgiMPtTiIJ0iDTKuFfsdUa3rL18gZNPXjqIjlJl8';

  useEffect(() => {
    const handleSearchResultsVisibility = event => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setSearchResultsVisible(false);
      }

      if (selectedItem) {
        setSelectedItem(null);
      }
    };

    document.addEventListener('mousedown', handleSearchResultsVisibility);

    return () => {
      document.removeEventListener('mousedown', handleSearchResultsVisibility);
    };
  }, [selectedItem]);

  const debounce = (func, delay) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(func, delay);
  };

  const handleSearch = async (query, isSearchIconClicked) => {
    try {
      if (
        !isSearchIconClicked &&
        (typeof query !== 'string' || query.trim() === '')
      ) {
        setSearchResults([]);
        setSearchResultsVisible(false);
        return;
      }

      const response = await axios.post(
        `${baseUrl}/products/search`,
        { query },
        {
          headers: {
            Authorization: authToken,
          },
        },
      );

      setSearchResults(response.data);
      setSearchResultsVisible(true);
    } catch (error) {
      console.error('An error occurred while fetching items:', error);
    }
  };

  const handleSearchInputChange = e => {
    const query = e.target.value;
    setSearchQuery(query);

    debounce(() => handleSearch(query, false), 300);
  };

  const links = [
    {
      icon: (
        <input
          type="text"
          placeholder="Пошук..."
          style={{ border: 'none', outline: 'none' }}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      ),
      id: 'searchIcon',
    },
    {
      icon: <SearchUrl className={`${styles.svgIcon} svg`} />,
      link: '/searchResult',
    },
    {
      icon: <SingUp className={`svg ${styles.singUp}`} />,
      link: '/singUp',
    },
    {
      icon: (
        <div className={styles.iconWrapper}>
          <p className={styles.count}>{totalCount}</p>
          <Cart className="svg" />
        </div>
      ),
      link: '/cart',
    },
  ];

  return (
    <div>
      <ul className={styles.list}>
        {links.map(({ link, icon }) => (
          <li key={link} className={styles.item}>
            {link === '/searchResult' ? (
              <a onClick={() => handleSearch(searchQuery, true)}>{icon}</a>
            ) : (
              <Link to={link}>{icon}</Link>
            )}
          </li>
        ))}
      </ul>

      <div
        ref={searchResultsRef}
        className={styles.searchResults}
        style={{ display: searchResultsVisible ? 'block' : 'none' }}>
        {searchResults.map(result => (
          <div key={result._id}>
            <p
              className={styles.searchResult}
              onClick={() => setSelectedItem(result)}>
              {result.name}
            </p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.itemDetails}>
          {selectedItem.imageUrls?.length > 0 && (
            <img
              src={selectedItem.imageUrls[0]}
              alt={selectedItem.name}
              style={{ width: '100%' }}
            />
          )}
          <h2 className={styles.title}>{selectedItem.name}</h2>
          <p className={styles.desc}>{selectedItem.manufacturer}</p>
          <p className={styles.weight}>Вага: {selectedItem.sizes}</p>
          <p className={styles.price}>
            Цiна:{' '}
            {selectedItem.currentPrice !== 0
              ? selectedItem.currentPrice
              : selectedItem.previousPrice}
          </p>
          <h5 className={styles.categories}>{selectedItem.categories}</h5>
        </div>
      )}
    </div>
  );
}
