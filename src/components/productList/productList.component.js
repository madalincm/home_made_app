import React from "react";

import Product from "./../product/product.component";

export default function ProductList(props) {
  return (
    <div className="productList">
      <Product
        productTitle="Test"
        productDescription="This is a very nice product"
        productImage="https://picsum.photos/500/150"
      />
      <Product
        productTitle="Test"
        productDescription="This is a very nice product"
        productImage="https://picsum.photos/500/150"
      />
    </div>
  );
}
