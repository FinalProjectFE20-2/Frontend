import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

describe('<Product />', () => {
  test('it should mount', () => {
    render(<Product />);

    const product = screen.getByTestId('Product');

    expect(product).toBeInTheDocument();
  });
});
