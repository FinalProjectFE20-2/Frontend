import style from './Hero.module.scss';
import Cart from '@/assets/icons/Cart.svg?react';
import { motion, spring } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/action/cart/cart';

function Hero() {
  const downAnimation = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const dispatch = useDispatch();

  const onAddCart1 = () => {
    const obj = {
      id: '654e3661267b62915fd96f4d',
      name: 'Тірамісу',
      size: '430г',
      imageUrl:
        'https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434539/yvkrgaboad3herqpxabt.png',
      price: 370,
    };
    onClickAddCart1(obj);
  };

  const onClickAddCart1 = obj => {
    dispatch(addToCart(obj));
  };

  const onAddCart2 = () => {
    const obj = {
      id: '654e3661267b62915fd96efc',
      name: 'Стейк із лосося з овочами',
      size: '465г',
      imageUrl:
        'https://res.cloudinary.com/dk4wwlrws/image/upload/v1698595233/Desktop/y30jarxv137369wyjnto.png',
      price: 425,
    };
    onClickAddCart2(obj);
  };

  const onClickAddCart2 = obj => {
    dispatch(addToCart(obj));
  };

  return (
    <section className={style.hero}>
      <div className={`${style.container} container`}>
        <div className={style.left__content}>
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
            variants={downAnimation}
            className={style.left__title}>
            Доставка готової їжі
            <br /> з фермерських продуктів!
          </motion.div>

          <div className={style.left__contacts}>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
              }}
              initial={'hidden'}
              animate={'visible'}
              transition={{ delay: 1, type: 'spring', stiffness: 50 }}
              variants={downAnimation}
              className={style.phone}>
              <a href="tel:+8 (093) 841-67-29">+38 (093) 841-67-29</a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                originX: 0,
              }}
              initial={'hidden'}
              animate={'visible'}
              transition={{ delay: 1, type: 'spring', stiffness: 50 }}
              variants={downAnimation}
              className={style.email}>
              <a href="https//delivery@midas.rest">delivery@midas.rest</a>
            </motion.div>

            <div className={style.content__card}>
              <img
                className={style.card__image}
                src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434539/yvkrgaboad3herqpxabt.png"
                alt="tiramisu"
              />
              <p className={style.card__title}>Тірамісу</p>
              <div className={style.card__weight}>430 г</div>
              <div className={style.card__inner}>
                <p className={style.card__price}>370 &#8372;</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className={style.card__cart}
                  onClick={onAddCart1}>
                  <Cart />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.right__content}>
          <div>
            <img
              className={style.image}
              src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698595233/Desktop/y30jarxv137369wyjnto.png"
              alt="image"
            />
            <div className={style.right__decor}></div>
          </div>
          <div className={style.red__square}>
            <div className={style.square__container}>
              <div className={style.square__title}>
                Стейк з лосося
                <br /> з овочами
              </div>
              <div className={style.square__weight}>465 г</div>
              <p className={style.square__description}>
                Ніжний стейк дикого
                <br /> лосося, пропитаний соком та ароматом легко
                <br /> смажених фермерських овочів.
              </p>
              <div className={style.price__inner}>
                <p className={style.square__price}>425 &#8372;</p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={style.square__cart}
                  onClick={onAddCart2}>
                  <Cart />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
