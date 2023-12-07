// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '@/App.jsx';
import Header from '@/containers/Header/Header.jsx';
import Footer from '@/containers/Footer/Footer.jsx';
import Cart from '@/pages/Cart/Cart';
import Product from '@/pages/Product/Product';
import AllProducts from '@/pages/AllProducts/AllProducts';
import NoPage from '@/pages/NoPage/NoPage';
import Checkout from '@/containers/Checkout/Checkout.jsx';
import Feedback from '@/pages/Feedback/Feedback.jsx';
import Contacts from '@/pages/Contacts/Contacts.jsx';
import Delivery from '@/pages/Delivery/Delivery.jsx';
import Politics from '@/pages/Politics/Politics';
import Terms from '@/pages/Terms/Terms';
import PrivateRoute from './privateRoute';
import Login from '@/pages/Login/Login';
import Registration from '@/pages/Registration/Registration';
import GoToTop from '@/components/GoToTop/GoToTop.jsx';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop.jsx';
import ProductCategories from '@/pages/ProductCategories/ProductCategories.jsx';

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Header />
        <GoToTop />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <App /> },
      { path: '/login', element: <Login /> },
      { path: '/singUp', element: <Registration /> },
      { path: '/feedback', element: <Feedback /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/delivery', element: <Delivery /> },
      { path: '/politics', element: <Politics /> },
      { path: '/terms', element: <Terms /> },
      { path: '/allProducts', element: <AllProducts /> },
      { path: '/product/:productId', element: <Product /> },
      { path: '/categories/:categoriesName', element: <ProductCategories /> },
      { path: '/cart', element: <Cart /> },
      { path: '/cart/checkout', element: <Checkout /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: '/profile', element: <div>Profile</div> },
          { path: '/order_history', element: <div>Order History</div> },
        ],
      },
      { path: '*', element: <NoPage /> },
    ],
  },
]);
