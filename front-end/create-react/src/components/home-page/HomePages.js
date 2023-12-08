import React from "react";
import Marquee from "./main/Marquee";
import FirstBanner from "./main/FirstBanner";
import SecondBanner from "./main/SecondBanner";
import ShopOurCollection from "./main/ShopOurCollection";
import ThirdBanner from "./main/ThirdBanner";
import Heading from "./main/carousel/Heading";
import Carousel from "./main/carousel/Carousel";
import FourthBanner from "./main/FourthBanner";
import FifthBanner from "./main/FifthBanner";
import SecondHeading from "./main/carousel/SecondHeading";
import SecondCarousel from "./main/carousel/SecondCarousel";
import MetaData from "../layouts/MetaData";


const HomePages = () => {


  return (
    <>
      <MetaData titte={'Home - Pudhumaalai'}/>

      <Marquee />
      <FirstBanner />
      <SecondBanner />
      <ShopOurCollection />
      <ThirdBanner />
      <Heading />
      <Carousel />
      <FourthBanner />
      <FifthBanner />
      <SecondHeading />
      <SecondCarousel />
    </>
  );
};

export default HomePages;
