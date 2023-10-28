import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';


// <Carousel className={styles.Slider} data-testid="Slider">
// <DiscountAmount />

function Slider() {
  return (
    <Carousel pause='false'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-50"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-50"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-50"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
