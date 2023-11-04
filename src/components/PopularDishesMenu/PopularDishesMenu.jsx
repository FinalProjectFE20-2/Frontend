import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

const PopularDishesMenu = props => {
  //
  const products = useSelector(
    state => Object.values(state.products.products) || [],
  );
  return (
    <section>
      <h2>Популярні страви</h2>
      <ul>
        {products.map(product => (
          <ProductCard key={product.itemNo} itemNo={product.itemNo} />
        ))}
      </ul>
    </section>
  );
};

PopularDishesMenu.propTypes = {};

export default PopularDishesMenu;
