import styles from './Slider.module.scss';
import { Navigation, Pagination, A11y } from 'swiper/modules';
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
        console.log(response.data.products);
        setProducts(response.data.products);

        /* Do something with products */
      })
      .catch(err => {
        console.log('error', err);
        /* Do something with error, e.g. show error to user */
      });
  };

  getProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const swiperItems = products.map(product => (
    <SwiperSlide key={product._id}>
      <Link to={`/product/${product.itemNo}`} className={styles.link}>
        <img
          src={product.imageUrls[0]}
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
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {swiperItems.length && swiperItems}
    </Swiper>
  );
}

export default Slider;
