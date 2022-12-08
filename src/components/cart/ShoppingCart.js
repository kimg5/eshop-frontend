import React, { Component } from "react";
import styled from "styled-components";
import Product from "./Product";
// import Disaccount from "./disaccount";
import CheckoutForm from "./CheckoutForm";
// import data from "./data";

class ShoppingCart extends React.Component {
  items = [];
  createOrder = () => {};
  constructor(props, context) {
    super(props, context);
    console.log(JSON.stringify(props.products));
    const products = props.products;
    this.createOrder = props.createOrder;
    this.state = {};

    // Pushing all products to state.productComponents
    let total = 0; // Used to calculate the total cost

    for (let product of products) {
      console.log(product);
      //   this.state.productComponents.push(
      this.items.push(
        <Product key={product.code} image={product.image} description={product.description} code={product.code} changeQuantity={this.changeQuantity} totalCost={product.quantity * product.price} quantity={product.quantity} price={product.price} />
      );
      total += Number(product.quantity) * Number(product.price);
    }
    console.log(this.items.length);
    this.state.productComponents = this.items;
    this.state.products = [...products];
    this.state.total = total;
    // this.setState({ total: total, productComponents: this.items });
  }

  // this function get executed when changing the quantity of a product
  changeQuantity = (e) => {
    let newState;

    for (let i = 0; i < this.state.productComponents.length; i++) {
      if (this.state.productComponents[i].props.code == e.target.id) {
        // Clone the current productComponents state
        newState = this.state.productComponents.slice();

        // Getting the old total cost
        let oldTotalCost = newState[i].props.totalCost;

        // Setting the new total Cost
        let newProps = Object.assign({}, newState[i].props);
        newProps.totalCost = (e.target.value * newState[i].props.price).toFixed(2);
        // console.log(e.target.value);
        this.state.products[i].quantity = e.target.value;
        let product = Object.assign({}, newState[i]);
        product.props = newProps;

        newState[i] = product;
        localStorage.setItem("products", JSON.stringify(this.state.products));
        this.setState((prevState, props) => ({
          productComponents: newState,
          total: (Number(prevState.total) + Number(newProps.totalCost) - Number(oldTotalCost)).toFixed(2),
        }));
        // console.log(newState);
      }
    }
    e.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <div>
          {this.state.productComponents}
          <div>
            <CheckoutForm total={this.state.total} createOrder={this.createOrder} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
          
        }
      `;
export default ShoppingCart;
