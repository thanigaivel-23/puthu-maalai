import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'

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
import { useSelector } from "react-redux";

const Header = () => {

  const location = useLocation();
  const { items: cartItems  } = useSelector(state => state.cartState)
  const { isAuthenticate } = useSelector(state => state.authState)
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>

      {( location.pathname !== "/address") ? <div className="shadow-lg">
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

                <SearchBar />

                {/* profile,cart,wishlist  */}

                <div
                  id="account"
                  className="flex items-center gap-x-5 px-3 md:gap-x-10 md:pr-7 "
                >
                  <Link to="/cart" className="flex relative">
                    <MdOutlineShoppingBag className="text-xl md:text-2xl" />
                    {cartItems.length !== 0 &&
                      <p className="absolute bottom-3 left-3 bg-rose-500 text-white rounded-full w-5 h-5 font-bold flex justify-center items-center text-xs">{cartItems.length}</p>}
                  </Link>


                  {isAuthenticate ?
                    <Link to="/account" id="profile" className="flex items-center gap-x-2">
                      <RiAccountCircleLine className="text-xl md:text-2xl" />
                      <p className="hidden lg:block">My Account</p>
                    </Link>
                    :
                    <Link to="/login" className="flex items-center gap-x-2">
                      <p className="font-semibold  rounded-lg bg-rose-500 text-white  px-3 py-1">Login</p>
                    </Link>
                  }
                  <Link to={`/wishlist`} id="wishlist" className="flex items-center  gap-x-2">
                    <FaRegHeart className="text-rose-500 text-xl md:text-2xl" />
                    <p className="hidden lg:block">Wishlist</p>
                  </Link>



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

        <ResSearchBar />

      </div> : null}
    </>
  );
};

export default Header;
