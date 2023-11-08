import style from './Hero.module.scss';
import {GrBasket} from 'react-icons/gr';
import CartButton from '../../components/CartButton/CartButton';

function Hero() {
  return (
    <section className={style.main}>
      <img
        className={style.content__image}
        src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698595233/Desktop/y30jarxv137369wyjnto.png"
        alt="image"
      />
      <div className={`${style.container} container`}>
        <div className={style.main__content}>
          <div>
            <p className={style.content__text}>
              Доставка готової їжі
              <br /> з фермерських продуктів!
            </p>
            <img
              className={style.content__decor}
              src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698607321/Desktop/jqytkkra1uj6cuecvowv.png"
              alt="decor"
            />
            <div className={style.content__tel}>
              <a className={style.tel__hover} href="tel:+8 (093) 841-67-29">+8 (093) 841-67-29</a>
            </div>
            <div>
              <a
                className={style.content__email}
                href="mailto:delivery@midas.rest">
                delivery@midas.rest
              </a>
            </div>
          </div>

          <img
            className={style.image__decor}
            src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1699044085/Desktop/glcxflqz3deku2twepn1.png"
            alt="decor"
          />
          <img
            className={style.image__red}
            src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698607425/Desktop/ifj72nerwrqp7wwq1bbs.png"
          />
          <h2 className={style.red__title}>
            Стейк з лосося
            <br /> з овочами
          </h2>
          <p className={style.red__weight}>250 г</p>
          <p className={style.red__description}>
            Ніжний стейк дикого
            <br /> лосося, пропитаний соком та ароматом легко
            <br /> смажених фермерських овочів.
          </p>
          <p className={style.red__price}>  1200 &#8372; <CartButton/> </p>
          
        </div>
        <div className={style.content__card}>
          <img
            src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698434539/yvkrgaboad3herqpxabt.png"
            alt="photo"
          />
          <h2 className={style.card__title}>Тірамісу</h2>
          <p className={style.card__weight}>430 г</p>
          <p className={style.card__price}> 370 &#8372;</p>
          <CartButton/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
