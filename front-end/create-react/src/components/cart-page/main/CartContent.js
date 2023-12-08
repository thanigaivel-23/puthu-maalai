import React from "react";

import Pincode from "./cartContent/Pincode";

import CartOffer from "./cartContent/CartOffer";
import CartHeading from "./cartContent/CartHeading";
import CartDetails from "./cartContent/CartDetails";
import CartCoupons from "./cartContent/CartCoupons";
import CartTotal from "./cartContent/CartTotal";
import CartLines from "./cartContent/CartLines";

const CartContent = () => {
  return (
    <>
      {/* main */}
      <div className="  flex flex-col lg:flex-row  lg:mt-14 lg:w-11/12 mx-auto">

        {/* left */}
        <div className=" h-full  lg:w-8/12 ">
          <Pincode />
          <CartOffer />
          <CartHeading />
          <CartDetails />
        </div>

        {/* right */}
        <div className="lg:w-4/12 lg:ml-7 ">
          <CartCoupons />
          <CartTotal />
          <CartLines />
        </div>
        
      </div>
    </>
  );
};

export default CartContent;
