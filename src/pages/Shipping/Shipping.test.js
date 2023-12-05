import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Shipping from './Shipping';

describe('<Shipping />', () => {
  test('it should mount', () => {
    render(<Shipping />);
    
    const shipping = screen.getByTestId('Shipping');

    expect(shipping).toBeInTheDocument();
  });
});