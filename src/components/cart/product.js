import React, {Component} from "react";
import ProductImage from "./productImage";
import ProductDescription from "./productDescription";
import ProductQuantity from "./productQuantity";
import ProductPrice from "./productPrice";
import ProductTotalCost from "./productTotalCost";


const Product = (props) => 
                    <div className="columns product-row">
                        <ProductImage url={props.image} />
                        <ProductDescription description={props.description} code={props.code} />
                        <ProductQuantity id={props.code} changeQuantity={props.changeQuantity} quantity={props.quantity} />
                        <ProductPrice price={props.price} />
                        <ProductTotalCost totalCost={props.totalCost} />
                    </div>;

export default Product;