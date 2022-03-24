import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div class='nav-section nav-left'>
        <button class='nav-section-items btn'>
          <a class='logo' href='../index.html'>
            {" "}
            BU{" "}
          </a>
        </button>
      </div>
      <div class='search'>
        <input type='search' class='input-field' placeholder='Search' />
      </div>
      <div class='nav-section nav-icons'>
        <a class='link-no-style' href='./cart.html'>
          <i class='fas fa-shopping-bag nav-section-items'></i>
        </a>

        <a class='link-no-style' href='./wishlist.html'>
          <i class='fas fa-heart nav-section-items'></i>
        </a>
        <a class='link-no-style' href='./login.html'>
          <i class='far fa-user-circle nav-section-items'></i>
        </a>
      </div>
    </nav>
  );
};
