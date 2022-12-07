import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
export const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>continue shopping </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  )
}