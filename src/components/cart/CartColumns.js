import React from 'react'
import styled from 'styled-components'
const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
      <h5>Image</h5>
        <h5>item</h5>
        <h5>Quantity</h5>
        <h5>Price</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 100px 2fr 1fr 1fr 1fr;
      justify-items: center;
      column-gap: 2rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    
  }
`

export default CartColumns
