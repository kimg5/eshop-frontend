import * as React from 'react';
import './Cart.css';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import { CartContent } from '../components/CardContent'

export function Cart() {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <div className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </div>
    )
  }
  return (
    <main>
      <div className='page'>
        <CartContent></CartContent>
      </div>
    </main>
  )
}

export default Cart;
