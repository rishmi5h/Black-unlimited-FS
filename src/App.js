import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
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
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
