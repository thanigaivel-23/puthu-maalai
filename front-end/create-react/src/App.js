import "./App.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { HelmetProvider} from "react-helmet-async"
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



function App() {

  // let path = window.location.pathname;

  


  return (
    <BrowserRouter>
      <ScrollToTop />
    
      <div>
        <HelmetProvider>
            <Header />
            <ToastContainer theme="dark"/>
            {/* {path !== "/login" && path !== "/register" && <Header />} */}
            <Routes>
              <Route path="/" element={<HomePages />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/search/:keyword" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/women" element={<WomenPage />} />
              <Route path="/men" element={<MenPage />} />
              <Route path="/brand" element={<BrandPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              <Route path="/offer" element={<OfferPage />} />
              <Route path="/account" element={<AccountPage />} />

          
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
