import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Terms from './Terms';

describe('<Terms />', () => {
  test('it should mount', () => {
    render(<Terms />);
    
    const terms = screen.getByTestId('Terms');

    expect(terms).toBeInTheDocument();
  });
});