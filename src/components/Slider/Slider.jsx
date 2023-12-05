import styles from './Slider.module.scss';
import './Slider.scss';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Discount from '@/assets/icons/Discount.svg?react';

function Slider() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(
        'https://backend-zeta-sandy.vercel.app/api/products/filter?discount=true',
      )
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const swiperItems = products.map(product => (
    <SwiperSlide key={product._id}>
      <Link to={`/product/${product.itemNo}`} className={styles.link}>
        <img
          src={product.imageUrls}
          alt={product.name}
          className={styles.img}
        />
        <Discount className={styles.discount} />
        <div className={styles.price}>₴{product.currentPrice}</div>
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={40}
      navigation
      autoplay
      loop={true}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        780: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
      pagination={{ clickable: true }}>
      {swiperItems.length && swiperItems}
    </Swiper>
  );
}

export default Slider;
