import React from "react";

import Title from "./components/title/title.component";
import ProductList from "./components/productList/productList.component";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline />
      <Title text="This is my title" />
      <ProductList />
    </div>
  );
}

export default App;
