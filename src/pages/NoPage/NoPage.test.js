import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoPage from './NoPage';

describe('<NoPage />', () => {
  test('it should mount', () => {
    render(<NoPage />);
    
    const noPage = screen.getByTestId('NoPage');

    expect(noPage).toBeInTheDocument();
  });
});