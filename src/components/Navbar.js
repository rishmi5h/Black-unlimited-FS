import React from "react";
import { FaHeart, FaShoppingBag, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-section nav-left'>
        <button className='nav-section-items btn'>
          <Link className='logo' to='/'>
            BU
          </Link>
        </button>
      </div>
      {/* <div className='search'>
        <input type='search' className='input-field' placeholder='Search' />
      </div> */}
      <div className='nav-section nav-icons '>
        <Link to='/cart' className='link-no-style m-r-3'>
          <FaShoppingBag />
        </Link>
        <Link to='/wishlist' className='link-no-style m-r-3'>
          <FaHeart />
        </Link>
        <Link to='/login' className='link-no-style m-r-2'>
          <FaRegUserCircle />
        </Link>
      </div>
    </nav>
  );
};
