// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import Checkout from '@/containers/Checkout/Checkout.jsx';


// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/checkout', 
    element: <Checkout />, 
  },
]);
