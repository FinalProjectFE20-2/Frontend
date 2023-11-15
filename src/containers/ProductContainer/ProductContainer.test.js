import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductContainer from './ProductContainer';

describe('<ProductContainer />', () => {
  test('it should mount', () => {
    render(<ProductContainer />);

    const productContainer = screen.getByTestId('ProductContainer');

    expect(productContainer).toBeInTheDocument();
  });
});
