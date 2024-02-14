import React, { useState } from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/layouts/header/Header";
import RoseBar from "./components/layouts/footer/RoseBar";
import Bottom from "./components/layouts/footer/Bottom";
import CopyRight from "./components/layouts/footer/CopyRight";

////////////////////////////////

import ProductPage from "./components/product-page/ProductPage";
import HomePages from "./components/home-page/HomePages";
import CartPage from "./components/cart-page/CartPage";
import ShopPage from "./components/shop-page/ShopPage";
import OrderPage from "./components/order-page/OrderPage";

import CategoryPage from "./components/category-page/CategoryPage";
import WomenPage from "./components/women-page/WomenPage";
import BrandPage from "./components/brand-page/BrandPage";
import MenPage from "./components/men-page/MenPage";
import AccessoriesPage from "./components/accessory-page/AccessoriesPage";
import GiftsPage from "./components/gifts-page/GiftsPage";
import OfferPage from "./components/offer-page/OfferPage";
import AccountPage from "./components/account-page/AccountPage";
import ScrollToTop from "./components/layouts/ScrollToTop";
import SearchPage from "./components/search-page/SearchPage";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import store from './strore'
import { useEffect } from "react";
import { loadUser } from "./actions/userActions/userActions";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Address from "./components/cart-page/Address";
import Payment from "./components/cart-page/Payment";
import PaymentSuccess from "./components/cart-page/PaymentSuccess";
import axios from "axios";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import OrderDetail from "./components/order-page/OrderDetail";
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import CreateProduct from "./components/admin/CreateProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersList";
import UsersList from "./components/admin/UsersList";
import ReviewsList from "./components/admin/ReviewsList";



function App() {

  const [stripeApiKey, setStripeApiKey] = useState('')

  useEffect(() => {
    store.dispatch(loadUser)

    async function getStripeApiKey() {
      const { data } = await axios.get('/api/stripeApi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()

  }, [])


  return (
    <BrowserRouter>

      <ScrollToTop />
      <div>
        <Header />

        <HelmetProvider>
          <ToastContainer theme="dark" />

          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/search/:keyword" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/offer" element={<OfferPage />} />
            <Route path="/account" element={<ProtectedRoute> <AccountPage /> </ProtectedRoute>} />
            <Route path="/update" element={<ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
            <Route path="/address" element={<ProtectedRoute> <Address /> </ProtectedRoute>} />
            {stripeApiKey && <Route path="/payment" element={<ProtectedRoute> <Elements stripe={loadStripe(stripeApiKey)}> <Payment /> </Elements> </ProtectedRoute>} />
            }
            <Route path="/order/success" element={<ProtectedRoute> <PaymentSuccess /> </ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute> <OrderPage /> </ProtectedRoute>} />
            <Route path="/order/:id/:product" element={<ProtectedRoute> <OrderDetail /> </ProtectedRoute>} />


            {/* admin routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin> <Dashboard /> </ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute isAdmin> <ProductsList /> </ProtectedRoute>} />
            <Route path="/admin/product/create" element={<ProtectedRoute isAdmin> <CreateProduct /> </ProtectedRoute>} />
            <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin> <UpdateProduct /> </ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute isAdmin> <OrdersList /> </ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute isAdmin> <UsersList /> </ProtectedRoute>} />
            <Route path="/admin/reviews" element={<ProtectedRoute isAdmin> <ReviewsList /> </ProtectedRoute>} />


          </Routes>


          <RoseBar />
          <Bottom />
          <CopyRight />
          {/* 
            {path !== "/login" && path !== "/register" && (<RoseBar />)}
            {path !== "/login" && path !== "/register" && <Bottom />}
            {path !== "/login" && path !== "/register" && <CopyRight />} */}
        </HelmetProvider>

      </div>

    </BrowserRouter>
  );
}

export default App;
