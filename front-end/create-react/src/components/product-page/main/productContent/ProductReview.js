import React from "react";
import { Rate } from 'antd';

const ProductReview = ({ reviews }) => {

  return (
    <>
      {
        reviews && reviews.map((review, index) => (
          <div key={index} className="px-5 md:px-10 lg:px-0">
            {/* heading */}
            <p className="border-t-2 mt-5 pt-9 font-bold text-sm md:text-xl">Rating & Reviews</p>

            {/* comment */}
            <div className="border-b-2 pb-5 mt-6 ">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-1">
                  <div>
                    <img src={review.user.avatar} className="rounded-full w-12 h-12" alt="" />
                  </div>
                  <div className="ml-2">
                    <h2 className="font-bold text-sm md:text-lg">{review.user.name}</h2>

                    <div className="flex items-center gap-x-1 text-rose-500 ">
                      <Rate disabled={true} value={review.rating} className="text-rose-500" />
                      <p className="text-black ml-1 text-xs md:text-sm font-bold">
                        2 mins ago
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              <div className="text-sm md:text-base mt-3">
                {review.comment !== 'false' ? review.comment : ''}
              </div>
            </div>
          </div>
        ))
      }

    </>
  );
};

export default ProductReview;
