import React from "react";

const ProductTitle = ({name}) => {
  return (
    <>
      <h2 className="flex flex-wrap font-bold  lg:w-4/6 mt-2 lg:mt-4 mx-5 md:mx-10 lg:mx-0 text-sm md:text-2xl" >
        {name}
      </h2>
    </>
  );
};

export default ProductTitle;
