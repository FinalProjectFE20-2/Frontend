import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchUrl from '@/assets/svg_icon/navigation/Search.svg?react';
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
  const handleSearchResultsVisibility = (event) => {
    if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
      setSearchResultsVisible(false);
    }
  };

    // Function to handle closing item details
    const handleItemDetailsClose = () => {
      setSelectedItem(null);
    };
  
    // Add event listener to handle clicks outside of search results and item details
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

  const handleSearch = async () => {
    try {
      // Make an API request to fetch the items.
      const response = await fetch('https://backend-zeta-sandy.vercel.app/api/products');
      if (response.ok) {
        const data = await response.json();
        // Filter the data based on the search query.
        const filteredResults = data.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Trigger search only if at least 2 letters were typed
    if (query.length >= 2) {
      debounce(() => handleSearch(query), 300); // Delay the search by 300ms after the user stops typing.
    } else {
      setSearchResults([]); // Clear the search results if the query is less than 2 letters.
      setSearchResultsVisible(false);
    }
  };

  const links = [
    {
      icon: (
        <input
          type="text"
          placeholder="Search..."
          style={{ border: 'none', outline: 'none' }}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      ),
      id: 'searchIcon',
    },
    { icon: <SearchUrl className={styles.svgIcon} />, link: '/searchResult' },
    { icon: <BasketUrl />, link: '/basket' },
  ];

  return (
    <div>
      <ul className={styles.list}>
        {links.map(({ link, icon }) => (
          <li key={link} className={styles.item}>
            {link === '/searchResult' ? (
              <a onClick={handleSearch}>{icon}</a>
            ) : (
              <Link to={link}>{icon}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Display search results */}
      <div ref={searchResultsRef} className="search-results" style={{ display: searchResultsVisible ? 'block' : 'none', background: 'rgba(25, 24, 24, 0.84)', borderRadius: '5px', position: 'absolute', width: '350px', padding: '10px', zIndex: 1000 }}>
        {searchResults.map((result) => (
          <div key={result._id}>
            {/* Render the search results */}
            <p onClick={() => setSelectedItem(result)}>{result.name}</p>
          </div>
        ))}
      </div>

      {/* Item details if a selected item exists */}
      {selectedItem && (
        <div className="item-details" style={{
        width: '350px',
        position: 'fixed', 
        zIndex: 1001,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px',
        background: 'rgba(14, 22, 36, 0.91)',
        border: '3px solid rosybrown'
      }}>
        {selectedItem.imageUrls?.length > 0 && (
          <img src={selectedItem.imageUrls[0]} alt={selectedItem.name} style={{ width: '100%' }} />
        )}
        <h2>{selectedItem.name}</h2>
        <h3>{selectedItem.manufacturer}</h3>
        <h4>Вага: {selectedItem.sizes}</h4>
        <h4>Цiна: {selectedItem.currentPrice}</h4>
        <h5>{selectedItem.categories}</h5>
      </div>
      )}
    </div>
  );
}
