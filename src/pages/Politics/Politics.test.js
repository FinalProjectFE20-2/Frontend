import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Politics from './Politics';

describe('<Politics />', () => {
  test('it should mount', () => {
    render(<Politics />);
    
    const politics = screen.getByTestId('Politics');

    expect(politics).toBeInTheDocument();
  });
});