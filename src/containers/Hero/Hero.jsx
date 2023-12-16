import { useState, useEffect, lazy, Suspense } from 'react';
import style from './Hero.module.scss';
// import Cart from '@/assets/icons/Cart.svg?react';
const Cart = lazy(() => import('@/assets/icons/Cart.svg?react'));
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
function Hero() {
  const downAnimation = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section className={style.hero}>
      <Suspense
        fallback={<ClockLoader color={'#36d7b7'} loading={true} size={200} />}>
        {loading ? (
          <ClockLoader color={'#36d7b7'} loading={loading} size={200} />
        ) : (
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

                <Link to="/product/96">
                  <div className={`${style.content__card} ${style.link}`}>
                    <img
                      className={style.card__image}
                      src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434539/yvkrgaboad3herqpxabt.png"
                      alt="tiramisu"
                    />
                    <p className={style.card__title}>Тірамісу</p>
                    <div className={style.card__weight}>430 г</div>
                    <div className={style.card__inner}>
                      <p className={style.card__price}>370 &#8372;</p>
                    </div>
                  </div>
                </Link>
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
              <Link to="/product/14">
                <div className={style.red__square}>
                  <div className={style.square__container}>
                    <div className={style.square__title}>
                      Стейк із лосося
                      <br /> з овочами
                    </div>
                    <div className={style.square__weight}>250 г</div>
                    <p className={style.square__description}>
                      Ніжний стейк дикого
                      <br /> лосося, пропитаний соком та ароматом легко
                      <br /> смажених фермерських овочів.
                    </p>
                    <div className={style.price__inner}>
                      <p className={style.square__price}>1200 &#8372;</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </Suspense>
    </section>
  );
}
export default Hero;
