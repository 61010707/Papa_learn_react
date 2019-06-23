import React from "react";

const ProductList = props => (
  <ul style={{ listStyle: "none" }} className="pro-list">
    <li>name : {props.product.name}</li>
    <li>price : {props.product.price} $</li>
    <li>description : {props.product.description}</li>
  </ul>
);

export default ProductList;
