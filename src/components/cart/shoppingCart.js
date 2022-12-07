
import React, {Component} from "react";
import styled from 'styled-components'
import Product from "./product";
import Disaccount from "./disaccount";
import CheckoutForm from "./checkoutForm";
import data from "./data";




class ShoppingCart extends React.Component {
            constructor(props, context) {
                const products = data.products;
                super(props, context);
                this.state = {
                    productComponents: [] // An array to hold all the products
                };
                // Pushing all products to state.productComponents
                let total = 0; // Used to calculate the total cost 
                for(let product of products) {
                    this.state.productComponents.push(<Product key={product.code} image={product.image} description={product.description} 
                    code={product.code} changeQuantity={this.changeQuantity} totalCost={product.quantity * product.price} quantity={product.quantity} price={product.price} />);
                    total += Number(product.quantity) * Number(product.price);
                }

                this.state.total = total;
            }

            // this function get executed when changing the quantity of a product 
            changeQuantity = (e) => {

                let newState;
                
                for(let i = 0; i < this.state.productComponents.length; i++) {
                    
                    if (this.state.productComponents[i].props.code == e.target.id) {
                        // Clone the current productComponents state
                        newState = this.state.productComponents.slice(); 
                        
                        // Getting the old total cost
                        let oldTotalCost = newState[i].props.totalCost;
                       
                        // Setting the new total Cost
                        let newProps = Object.assign({}, newState[i].props);
                        newProps.totalCost = (e.target.value * newState[i].props.price).toFixed(2);
                        
                        let product = Object.assign({}, newState[i]);
                        product.props = newProps;

                        newState[i] = product;

                        this.setState( (prevState, props) => ({
                            productComponents: newState,
                            total: (Number(prevState.total) + Number(newProps.totalCost) - Number(oldTotalCost)).toFixed(2) 
                        }));     
                    } 
                }
                e.preventDefault(); 
            }

            
            render() {    
                return (
                    <Wrapper>
                    <div>                     
                        {this.state.productComponents}
                        <div className="columns checkout">
                            {/* <Disaccount /> */}
                            <CheckoutForm total={this.state.total}/>
                        </div>
                        </div>
                        </Wrapper>
                )
            }
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
      
          .columns checkout {
            margin-left: auto; 
        margin-right: 0;
          }
          
        }
      `
export default ShoppingCart;