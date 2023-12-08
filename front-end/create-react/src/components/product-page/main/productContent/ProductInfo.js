import React from "react";

const ProductInfo = ({brand, type, fabric, style, sizeAndFit}) => {
  return (
    <>
    {}
      <div className="text-sm md:text-base mb-4  px-5 md:px-10 lg:px-0 md:pt-0 pt-3  mt-3 md:mt-6 border-t-8 md:border-none">
        <p className="font-bold mb-2 md:mb-0">Details</p>
        <table className="">
          <tbody>
            {brand && 
              <tr className="">
                <td className="font-medium w-28 lg:w-52 ">Brand</td>
                <td>{brand}</td>
              </tr>
            }
            {type &&
            <tr>
              <td className="font-medium ">Type</td>
              <td>{type}</td>
            </tr>}

            {fabric &&
            <tr>
              <td className="font-medium ">Fabric</td>
              <td>{fabric}</td>
            </tr>}

            {style &&
            <tr>
              <td className="font-medium ">Style</td>
              <td>{style}</td>
            </tr>}

            {sizeAndFit &&
            <tr>
              <td className="font-medium ">Size & Fit</td>
              <td>{sizeAndFit}</td>
            </tr>}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductInfo;
