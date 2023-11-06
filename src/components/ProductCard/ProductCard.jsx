import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const ProductCard = ({ itemNo }) => {
  // const product1 = {
  //   _id: 1,
  //   itemNo: '1234',
  //   enabled: true,
  //   name: 'Хачапурі по-аджарськи',
  //   sizes: '430г',
  //   manufacturer:
  //     'Хачапурі "Човник"  із начинкою з розплавленого сиру сулугуні, яйця та масла.',
  //   previousPrice: 470,
  //   currentPrice: 0,
  //   imageUrls: [
  //     'https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434573/yrbl3vv3q8krgw4agu0n.png',
  //   ],
  //   categories: 'Горячі закуски',
  //   quantity: 100,
  // };
  const products = useSelector(state => state.products.products || []);
const product = products.find(product => product.itemNo===itemNo)
  console.log(product, 11);

  return (
    <li>
      {product.imageUrls?.length > 0 && (
        <img src={product?.imageUrls[0]} alt={product?.name} />
      )}
      <h4>{product?.name}</h4>
      <p>{product.sizes}</p>
      <p>{product.manufacturer}</p>
      <p>&#8372; {product.previousPrice},00</p>
      {!!product.currentPrice && <p>&#8372; {product.currentPrice},00</p>}
    </li>
  );
};

ProductCard.propTypes = { itemNo: PropTypes.string };

export default ProductCard;
