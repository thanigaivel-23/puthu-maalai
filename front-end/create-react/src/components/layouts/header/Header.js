import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./header.css";

import { MdOutlineShoppingBag } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { Drawer } from "antd";
import Accessories from "./Accessories";
import Gifts from "./Gifts";
import Men from "./Men";
import Brand from "./Brand";
import Women from "./Women";
import Category from "./Category";

import Offer from "./Offer";
import SearchBar from "./SearchBar";
import ResSearchBar from "./ResSearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="shadow-lg">
        <div className="flex items-center py-2 md:py-0 md:block  ">
          <div className="order-2 w-full ">
            <header
              id="header"
              className="   flex items-center justify-between md:pt-3"
            >
              {/* title  */}
              <div
                id="title"
                className="text-lg md:mr-3  md:pl-10 md:flex-grow "
              >
                <h1 className="text-rose-500 text-xl sm:text-2xl md:text-3xl ">
                  <Link to="/">
                    <span className="font-bold">PUDHU</span> MAALAI
                  </Link>
                </h1>
                <p className="hidden text-gray-500 tracking-widest  text-xl md:block">
                  One Stop Style Shop
                </p>
              </div>

              <div className="flex items-center  md:grow">
                {/* search bar  */}

                <SearchBar/>

                {/* profile,cart,wishlist  */}

                <div
                  id="account"
                  className="flex items-center gap-x-3 px-3 md:gap-x-10 md:pr-7 "
                >
                  <div id="cart">
                    <Link to="/cart">
                      <MdOutlineShoppingBag className="text-xl" />
                    </Link>
                  </div>
                  <Link
                    to="/account"
                    id="profile"
                    className="flex items-center gap-x-2"
                  >
                    <RiAccountCircleLine className="text-xl" />
                    <p className="hidden lg:block">My Account</p>
                  </Link>
                  <div id="wishlist" className="flex items-center  gap-x-2">
                    <FaRegHeart className="text-rose-500 text-xl" />
                    <p className="hidden lg:block">Wishlist</p>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <nav className="order-1 bg-white  border-gray-200 w-f flex flex-wrap items-center justify-between md:pl-10 md:mt-3 md:pb-4">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Category />
                </li>
                <li>
                  <Women />
                </li>
                <li>
                  <Men />
                </li>
                <li>
                  <Brand />
                </li>
                <li>
                  <Accessories />
                </li>
                <li>
                  <Gifts />
                </li>
              </ul>
            </div>

            <button
              onClick={showDrawer}
              type="button"
              className=" md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 outline-none  focus:ring-gray-200 "
            >
              <FaBars className=" text-xl" />
            </button>
            <Drawer width={230} placement="left" onClose={onClose} open={open}>
              <p>
                <Category />
              </p>
              <p>
                <Women />
              </p>
              <p>
                <Men />
              </p>
              <p>
                <Brand />
              </p>
              <p>
                <Accessories />
              </p>
              <p>
                <Gifts />
              </p>
              <Offer />
            </Drawer>
            <div className="hidden md:block">
              <Offer />
            </div>
          </nav>
        </div>

        {/* res search bar*/}

        <ResSearchBar/>
        
      </div>
    </>
  );
};

export default Header;
