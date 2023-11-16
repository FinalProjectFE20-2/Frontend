import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchUrl from '@/assets/svg_icon/navigation/Search.svg?react';
import SingUp from '@/assets/svg_icon/navigation/SingUp.svg?react';
import BasketUrl from '@/assets/svg_icon/navigation/Basket.svg?react';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Variable to store the selected item
  const searchResultsRef = useRef(null);
  const debounceTimer = useRef(null);

  // Function to handle search results visibility
  const handleSearchResultsVisibility = event => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target)
    ) {
      setSearchResultsVisible(false);
    }
  };

  // Function to handle closing item details
  const handleItemDetailsClose = () => {
    setSelectedItem(null);
  };

  // Add event listener to handle clicks outside of search results and item details
  useEffect(() => {
    document.addEventListener('mousedown', event => {
      handleSearchResultsVisibility(event);

      if (selectedItem) {
        handleItemDetailsClose();
      }
    });

    return () => {
      document.removeEventListener('mousedown', event => {
        handleSearchResultsVisibility(event);

        if (selectedItem) {
          handleItemDetailsClose();
        }
      });
    };
  }, [selectedItem]);

  // Add event listener to handle clicks outside of search results
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
      // Check if the query is not a string or is an empty string
      if (
        !isSearchIconClicked &&
        (typeof query !== 'string' || query.trim() === '')
      ) {
        setSearchResults([]);
        setSearchResultsVisible(false);
        return;
      }

      // Make an API request to fetch the items.
      const response = await fetch(
        'https://backend-zeta-sandy.vercel.app/api/products',
      );
      if (response.ok) {
        const data = await response.json();
        // Filter the data based on the search query.
        const filteredResults = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        );

        // Update the search results and make them visible.
        setSearchResults(filteredResults);
        setSearchResultsVisible(true);
      } else {
        console.error('Failed to fetch items');
      }
    } catch (error) {
      console.error('An error occurred while fetching items:', error);
    }
  };

  const handleSearchInputChange = e => {
    const query = e.target.value;
    setSearchQuery(query);

    debounce(() => handleSearch(query, false), 300); // Pass false to indicate search icon is not clicked
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
    { icon: <SingUp className={styles.singUp} />, link: '/singUp' },
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

      {/* Display search results */}
      <div
        ref={searchResultsRef}
        className={styles.searchResults}
        style={{ display: searchResultsVisible ? 'block' : 'none' }}>
        {searchResults.map(result => (
          <div key={result._id}>
            {/* Render the search results */}
            <p
              className={styles.searchResult}
              onClick={() => setSelectedItem(result)}>
              {result.name}
            </p>
          </div>
        ))}
      </div>

      {/* Item details if a selected item exists */}
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
          <h3 className={styles.desc}>{selectedItem.manufacturer}</h3>
          <h4 className={styles.weight}>Вага: {selectedItem.sizes}</h4>
          <h4 className={styles.price}>
            Цiна:{' '}
            {selectedItem.currentPrice !== 0
              ? selectedItem.currentPrice
              : selectedItem.previousPrice}
          </h4>
          <h5 className={styles.categories}>{selectedItem.categories}</h5>
        </div>
      )}
    </div>
  );
}
