import React from "react";
import {Link} from 'react-router-dom'

import { GrMapLocation } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { LiaUserEditSolid } from "react-icons/lia";
import { LuPackageOpen } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { BsWallet2 } from "react-icons/bs";
import { LiaCreditCardSolid } from "react-icons/lia";

const AccountDetails = () => {
  return (
    <>
      {/* order */}
      <Link
        to="/order"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <LuPackageOpen className=" text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Order</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              Check your order status
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </Link>

      {/* address */}
      <a
        href="/"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <GrMapLocation className="text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Addresses</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              Save addresses for a hassle-free checkout
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </a>

      {/* cards */}
      <a
        href="/"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <LiaCreditCardSolid className="text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Save Cards</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              saved your cards for faster checkout
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </a>

      {/* upi */}
      <a
        href="/"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <BsWallet2 className="text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Saved UPI</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              View your saved UPI
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </a>

      {/* coupons */}
      <a
        href="/"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <CiDiscount1 className="text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Coupons</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              Manage coupons for additoinal discounts
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </a>

      {/* profile details */}
      <a
        href="/"
        className="flex justify-between items-center px-3 md:px-20 py-3 md:py-5 border-b-2"
      >
        <div className="flex justify-between items-center gap-x-3">
          <i>
            <LiaUserEditSolid className="text-xl md:text-2xl" />
          </i>
          <div>
            <p className="font-bold text-sm md:text-base ">Profile Details</p>
            <p className="text-xs text-gray-400 md:text-sm ">
              Change youlr profile detalis
            </p>
          </div>
        </div>
        <i>
          <GrFormNext className="md:text-xl" />
        </i>
      </a>
    </>
  );
};

export default AccountDetails;
