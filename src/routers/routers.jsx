// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import Cart from '../pages/Cart/Cart';
import Checkout from '@/containers/Checkout/Checkout.jsx';


// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout', 
    element: <Checkout />, 
  },
]);
