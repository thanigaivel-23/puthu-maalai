import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../main/productPage.css";

import ProductN from "./ProductN";
import ProductP from "./ProductP";

const ImgSilder = ({ singleProduct }) => {
  let lengthVal = 0;
  if (singleProduct.images) {

    lengthVal = singleProduct.images.length
    lengthVal = lengthVal > 3 ? 3 : lengthVal
  }
  else {
    lengthVal = 0
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: lengthVal,
    slidesToScroll: 1,
    nextArrow: <ProductN />,
    prevArrow: <ProductP />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  const [img, setImg] = useState(singleProduct.images && singleProduct.images[0].image)


  return (
    <>
      <div className=" hidden  lg:flex justify-center">
        <img className="" src={img} alt="" />
      </div>
      

      <div className="hidden lg:block mt-2 ">
        <Slider {...settings}>
          {singleProduct.images ? singleProduct.images.length > 1 && singleProduct.images.map(image =>
            <div className="lg:mr-40" key={image._id}>
              <img className="w-[90%] xs:w-4/5 sm:w-3/5  mx-auto" src={image.image} alt="" onClick={() => setImg(image.image)} />
            </div>
          ) : ''}
        </Slider>
      </div>

      <div className="lg:hidden mt-2 ">
        <Slider {...settings}>
          {singleProduct.images && singleProduct.images.map(image =>
            <div className="lg:mr-40" key={image._id}>
              <img className="w-[90%] xs:w-4/5 sm:w-3/5  mx-auto" src={image.image} alt="" onClick={() => setImg(image.image)} />
            </div>
          ) }
        </Slider>
      </div>
    </>
  );
};

export default ImgSilder;
