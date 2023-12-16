import {
  render,
  screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  test('it should mount', () => {
    render( < Breadcrumbs / > );

    const breadcrumbs = screen.getByTestId('Breadcrumbs');

    expect(breadcrumbs).toBeInTheDocument();
  });
});