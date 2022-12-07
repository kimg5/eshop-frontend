import * as React from 'react';
import './Cart.css';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import { CartContent } from '../components/CardContent'
import ShoppingCart from '../components/cart/shoppingCart';
import CartColumns from '../components/CartColumns';

export function Cart() {
  
  return (
    
    <main>
      <CartColumns />
      <ShoppingCart />
       {/* <<section class="section products-table">
            <div class="columns table-header">
                <div class="column">
                    Image
                </div>
                <div class="column is-half">
                    Product Description
                </div>
                <div class="column">
                    Quantity
                </div>
                <div class="column">
                    Price
                </div>
                <div class="column">
                    Total
                </div>
            </div> 
            <div id="shopping_cart">
            <ShoppingCart />
            </div>
        </section>> */}
      
      {/* shopping cart version 2 */}
     
      
      </main>
  )
}

export default Cart;
