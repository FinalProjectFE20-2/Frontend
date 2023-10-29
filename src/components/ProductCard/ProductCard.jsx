import React from 'react';
import PropTypes from 'prop-types';
const ProductCard = ({ id }) => {
  const product1 = {
    _id: 1,
    imgUrl:
      'https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434573/yrbl3vv3q8krgw4agu0n.png',
    title: 'Хачапурі по-аджарськи',
    weight: '430г',
    description:
      'Хачапурі "Човник"  із начинкою з розплавленого сиру сулугуні, яйця та масла',
    price: 470,
    discountPrice: 0,
  };
  return (
    <li>
      <img src={product1.imgUrl} alt={product1.title} />
      <h4>{product1.title}</h4>
      <p>{product1.weight}</p>
      <p>{product1.description}</p>
      <p>&#8372; {product1.price},00</p>
      {!!product1.discountPrice && <p>&#8372; {product1.discountPrice},00</p>}
    </li>
  );
};

ProductCard.propTypes = { id: PropTypes.string };

export default ProductCard;
