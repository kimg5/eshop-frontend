import * as React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom'
import CartContent from '../components/cart/CartContent';
import styled from 'styled-components'


export function Cart() {
  
  return (
    
      <main>
          <Wrapper className='page'>
              <CartContent />
              </Wrapper>
      </main>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default Cart;
