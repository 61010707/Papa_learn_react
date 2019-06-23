import React from "react";
import ProductsData from "./vschoolProducts";
import ProductList from "./productList";

class MyApp extends React.Component {
  myMethod() {
    const productComponent = ProductsData.map(data => (
      <ProductList key={data.id} product={data} />
    ));
    return productComponent;
  }
  render() {
    const incomponent = this.myMethod();
    return <div className="product-list">{incomponent} </div>;
  }
}
export default MyApp;
