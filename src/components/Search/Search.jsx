import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchUrl from '@/assets/svg_icon/navigation/Search.svg?react';
import BasketUrl from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './Search.module.scss';
import axios from 'axios';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const searchResultsRef = useRef(null);
  const debounceTimer = useRef(null);
  const baseUrl = 'https://backend-zeta-sandy.vercel.app/api';

  const handleSearchResultsVisibility = (event) => {
    if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
      setSearchResultsVisible(false);
    }
  };

  const handleItemDetailsClose = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      handleSearchResultsVisibility(event);

      if (selectedItem) {
        handleItemDetailsClose();
      }
    });

    return () => {
      document.removeEventListener('mousedown', (event) => {
        handleSearchResultsVisibility(event);

        if (selectedItem) {
          handleItemDetailsClose();
        }
      });
    };
  }, [selectedItem]);

  useEffect(() => {
    document.addEventListener('mousedown', handleSearchResultsVisibility);

    return () => {
      document.removeEventListener('mousedown', handleSearchResultsVisibility);
    };
  }, []);

  const debounce = (func, delay) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(func, delay);
  };

  const handleSearch = async (query, isSearchIconClicked) => {
    try {
      if (!isSearchIconClicked && (typeof query !== 'string' || query.trim() === '')) {
        setSearchResults([]);
        setSearchResultsVisible(false);
        return;
      }

      const response = await axios.get(`${baseUrl}/products`);
      const data = response.data;

      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
      setSearchResultsVisible(true);
    } catch (error) {
      console.error('An error occurred while fetching items:', error);
    }
  };

  const handleSearchInputChange = (e) => {
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
    { icon: <BasketUrl className="svg" />, link: '/cart' },
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
        style={{ display: searchResultsVisible ? 'block' : 'none' }}
      >
        {searchResults.map((result) => (
          <div key={result._id}>
            <p
              className={styles.searchResult}
              onClick={() => setSelectedItem(result)}
            >
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
