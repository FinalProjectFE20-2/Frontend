import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Slider() {
  const [discounts, setDiscounts] = useState([]);

  const fetchDiscountsData = () => {
    return axios
      .get('discountsData.json')
      .then(response => setDiscounts(response.data));
  };

  useEffect(() => {
    fetchDiscountsData();
  }, []);

  const carouselItems = discounts.map(item => (
    <Carousel.Item interval={3000} key={item.id}>
      <Link to={`/product/${item.url}`}>
        <img className="d-block w-100 h-50" src={item.image} alt={item.alt} />
      </Link>
    </Carousel.Item>
  ));

  return (
    <Carousel pause="false" data-testid="Slider">
      {carouselItems.length && carouselItems}
    </Carousel>
  );
}

export default Slider;
