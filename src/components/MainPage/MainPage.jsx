import React from 'react';
import style from './Main.module.scss';

function MainPage() {
  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className={style.main__content}>
          <p className={style.content__text}>
            Доставка готової їжі з фермерських продуктів!
          </p>
          <img
            src="https://res.cloudinary.com/dk4wwlrws/image/upload/v1698607321/Desktop/jqytkkra1uj6cuecvowv.png"
            alt="decor"
          />
          <div className={style.content__tel}>
            <a href="tel:+8 (093) 841-67-29">+8 (093) 841-67-29</a>
          </div>
          <div>
            <a
              className={style.content__email}
              href="mailto:delivery@midas.rest">
              delivery@midas.rest
            </a>
          </div>
          {/* <div className={s.content__card}>
            <img src="#" alt="photo" />
            <h2 className={s.card__title}>Тирамису</h2>
            <p className={s.card__weight}>430 г</p>
            <p className={s.card__price}>370 гривень</p>
            <a className={s.card__cart} href="#"></a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default MainPage;
