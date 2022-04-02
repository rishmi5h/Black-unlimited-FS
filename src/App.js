import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Cart,
  Home,
  Product,
  Products,
  Profile,
  Wishlist,
  Login,
  Signup,
} from "./pages";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
