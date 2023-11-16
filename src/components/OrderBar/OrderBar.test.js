import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderBar from './OrderBar';

describe('<OrderBar />', () => {
  test('it should mount', () => {
    render(<OrderBar />);
    
    const orderBar = screen.getByTestId('OrderBar');

    expect(orderBar).toBeInTheDocument();
  });
});