import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Discounts from './Discounts';

describe('<Discounts />', () => {
  test('it should mount', () => {
    render(<Discounts />);
    const discounts = screen.getByTestId('Discounts');
    expect(discounts).toBeInTheDocument();
  });
});