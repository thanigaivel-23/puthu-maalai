import React from "react";

const AboutProduct = ({description}) => {
  return (
    <>
      <div className="w-fit  font-bold py-4    px-5 md:px-10 lg:px-0 ymd:pt-0   mt-3 md:mt-10 border-t-8 md:border-y-2">
        <p className="text-sm md:text-base mb-3 md:mb-0">About this item</p>
        <ul className="font-medium">
          <li className="list-disc ml-8 text-sm md:text-base">
            {description}
          </li>
          {/* <li className="list-disc ml-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias!
          </li>
          <li className="list-disc ml-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias!
          </li>
          <li className="list-disc ml-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias!
          </li>
          <li className="list-disc ml-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias!
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default AboutProduct;
