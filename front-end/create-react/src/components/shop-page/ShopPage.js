import React from "react";
import FirstBanner from "../home-page/main/FirstBanner";
import Marquee from "../home-page/main/Marquee";
import ShopProducts from "../shop-page/main/ShopProducts";
import MetaData from "../layouts/MetaData";

const ShopPage = () => {



  return (
    <>
      <MetaData titte={'shopping page'}/>
      <Marquee />
      <FirstBanner />
      <ShopProducts />
    </>
  );
};

export default ShopPage;
