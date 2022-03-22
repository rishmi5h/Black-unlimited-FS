import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Authentication,
  Cart,
  Home,
  Product,
  Products,
  Profile,
  Wishlist,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='cart' element={<Cart />} />
        <Route path='product' element={<Product />} />
        <Route path='products' element={<Products />} />
        <Route path='profile' element={<Profile />} />
        <Route path='wishlist' element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default App;
