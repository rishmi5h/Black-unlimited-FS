import React from "react";
import "./Card.css";
import { FaRegHeart, FaStar } from "react-icons/fa";

export const Card = (props) => {
  const { id, name, mrp, price, brand, img, category, rating } = props.item;
  return (
    <div className='card vertical-card'>
      <div>
        <img src={img} alt='name' className='responsive-img' />
      </div>
      <div class='card-content p-1'>
        <div className='horizontal space-between'>
          <h2 className='card-title'>{brand}</h2>
          {/* <FaRegHeart className='wishlist-btn' /> */}
        </div>
        <p className='card-subtitle'>{name}</p>
        <div className='horizontal space-between'>
          <p className='card-para'>{category}</p>
          <p className='card-para text-right strike-through'>{`₹ ${mrp}`}</p>
        </div>
        <div className='horizontal space-between'>
          <p className='card-para text-primary m-t-1'>{rating} ★</p>
          <h2 className='card-para text-right text-green'>{`₹ ${price}`}</h2>
        </div>
      </div>
      <button class='primary-outline-btn btn m-1 vertical-center add-cart-btn'>
        <i class='fas fa-shopping-cart m-r-1'></i>Add to Cart
      </button>
      {/* <button class='primary-btn btn m-1 vertical-center'>Buy Now</button> */}
    </div>
  );
};
