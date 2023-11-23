import style from './Hero.module.scss';
import Cart from '@/assets/icons/Cart.svg?react';
import { motion } from 'framer-motion';

function Hero() {
  const downAnimation = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className={style.hero}>
      <div className={`${style.container} container`}>
        <div className={style.left__content}>
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            transition={{ delay: 0.5 }}
            variants={downAnimation}
            className={style.left__title}>
            Доставка готової їжі
            <br /> з фермерських продуктів!
          </motion.div>

          <div className={style.left__contacts}>
            <motion.div
              whileHover={{ scale: 1.3 }}
              initial={'hidden'}
              animate={'visible'}
              transition={{ delay: 1 }}
              variants={downAnimation}
              className={style.phone}>
              <a href="tel:+8 (093) 841-67-29">+38 (093) 841-67-29</a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              initial={'hidden'}
              animate={'visible'}
              transition={{ delay: 1 }}
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
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className={style.card__cart}>
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
                {' '}
                Стейк з лосося
                <br /> з овочами
              </div>
              <div className={style.square__weight}>250 г</div>
              <p className={style.square__description}>
                {' '}
                Ніжний стейк дикого
                <br /> лосося, пропитаний соком та ароматом легко
                <br /> смажених фермерських овочів.
              </p>
              <div className={style.price__inner}>
                <p className={style.square__price}>1200 &#8372;</p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={style.square__cart}>
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
