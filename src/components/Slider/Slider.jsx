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

  getProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const swiperItems = products.map(product => (
    <SwiperSlide key={product._id}>
      <Link to={`/product/${product.itemNo}`} className="link">
        <img src={product.imageUrls[0]} alt={product.name} className="img" />
        <Discount className="discount" />
        <div className="price">₴{product.currentPrice}</div>
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      autoplay
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {swiperItems.length && swiperItems}
    </Swiper>
  );
}

export default Slider;
