import React from "react";
import OrderHeading from "./main/OrderHeading";
import OrderDetails from "./main/OrderDetails";
import NextPage from "../shop-page/main/NextPage";

const OrderPage = () => {
  return (
    <div>
      <OrderHeading />
      <OrderDetails />
      <NextPage />
    </div>
  );
};

export default OrderPage;
