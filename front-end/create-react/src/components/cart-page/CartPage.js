import React from "react";
import CartContent from "./main/CartContent";
import ProductHeading from "./main/ProductHeading";
import CartProducts from "./main/CartProducts";

const CartPage = () => {
  return (
    <div>
      <CartContent />
      <ProductHeading />
      <CartProducts />
    </div>
  );
};

export default CartPage;
