import React from "react";
import PropTypes from "prop-types";

const PopularDishesMenu = (props) => {
  const products = [
    {
      _id: 1,
      title: "Хачапурі по-аджарськи",
      weight: "430г",
      description:
        'Хачапурі "Човник"  із начинкою з розплавленого сиру сулугуні, яйця та масла.',
      price: 470,
      discountPrice: 0,
      imgUrl: "https://",
    },
  ];
  return (
    <section>
      <h2>Популярні страви</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product._id} id={product.id} />
        ))}
      </ul>
    </section>
  );
};

PopularDishesMenu.propTypes = {};

export default PopularDishesMenu;
// &#8372;
