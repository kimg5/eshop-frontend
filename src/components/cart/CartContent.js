import * as React from 'react';
// import './Cart.css';
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart';
import CartColumns from './CartColumns';
import styled from 'styled-components'
import TotalCost from './TotalCost';

export function CartContent() {
  
  return (
    
    <Wrapper className='section section-center'>
      <CartColumns />
      <ShoppingCart />
      </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    // margin-bottom: 2rem;
    margin-right: 5rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    // background: var(--clr-primary-5);
    background: #3273dc;
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    // background: var(--clr-black);
    background: #2e7d32;
  }
`
export default CartContent;
