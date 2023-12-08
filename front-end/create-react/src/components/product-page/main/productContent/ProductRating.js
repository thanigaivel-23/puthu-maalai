import React from "react";



const ProductRating = ({ratings, numOfReviews}) => {
  return (
    <>
      <div className="mx-5 md:mx-10 mt-3 lg:m-0 ">
        {/* rating */}
        <div className="flex items-center lg:mt-6">
                <div className="rating-outer">
                  <div className="rating-inner" style={{width: `${ratings/5*100}%`}}></div>
                </div>
          <div className="flex font-semibold text-xs md:text-base ml-2">{ratings} | {numOfReviews} Ratings</div>
        </div>


        <p className="mt-1 font-medium text-xs md:text-sm">
          200 bought in last week/month
        </p>
      </div>
    </>
  );
};

export default ProductRating;
