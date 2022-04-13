import React from "react";
import { CartProvider } from "./src/ecommerceSample/store/CartContext";
import MainTab from "./src/ecommerceSample/navigations/MainTab";

const App = () => {
  return (
    <CartProvider>
      <MainTab></MainTab>
    </CartProvider>
  );
};

export default App;
