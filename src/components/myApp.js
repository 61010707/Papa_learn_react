import React from "react";
import ProductsData from "./vschoolProducts";
import ProductList from "./productList";
const MyApp = () => {
  const productComponent = ProductsData.map(data => (
    <ProductList
      key={data.id}
      product={data}
    />
  ));
  return <div className="product-list">{productComponent}</div>;
};
export default MyApp;
