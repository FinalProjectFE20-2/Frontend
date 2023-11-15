// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '@/App.jsx';
import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';
import Cart from '@/pages/Cart/Cart';
import Product from '@/pages/Product/Product';
import Shipping from '@/pages/Shipping/Shipping';
import Contacts from '@/pages/Contacts/Contacts';
import Politics from '@/pages/Politics/Politics';
import Terms from '@/pages/Terms/Terms';
import NoPage from '@/pages/NoPage/NoPage';
import Checkout from '@/containers/Checkout/Checkout.jsx';
import Feedback from '@/pages/Feedback/Feedback.jsx';
import Contacts from '@/pages/Contacts/Contacts.jsx';
import Delivery from '@/pages/Delivery/Delivery.jsx';



// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '*',
        element: <NoPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/cart/checkout',
        element: <Checkout />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/delivery',
        element: <Delivery />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/shipping',
        element: <Shipping />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/politics',
        element: <Politics />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        element: <div>Акції</div>,
        path: '/action',
      },
      {
        element: <div>Гарячі страви</div>,
        path: '/hot_dishes',
      },
      {
        element: <div>Супи</div>,
        path: '/soups',
      },
      {
        element: <div>Хінкалі</div>,
        path: '/khinkali',
      },
      {
        element: <div>Холодні страви</div>,
        path: '/cold_dishes',
      },
      {
        element: <div>Салати</div>,
        path: '/salat',
      },
      {
        element: <div>Соуси</div>,
        path: '/souse',
      },
      {
        element: <div>Свіжа випічка</div>,
        path: '/fresh_pastries',
      },
      {
        element: <div>Десерти</div>,
        path: '/deserts',
      },
      {
        element: <div>Напої</div>,
        path: '/drinks',
      },
    ],
  },
]);
