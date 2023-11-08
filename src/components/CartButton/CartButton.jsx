import React from 'react'
import style from './CartButton.module.scss'

function CartButton() {
  return (
    <a href="#">
    <button className={style.cart__button}>
      Додати в кошик
    </button>
    </a>
  )
}

export default CartButton