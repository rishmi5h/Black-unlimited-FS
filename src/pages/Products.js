import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components";
import { useProductsData } from "../data";

const Products = () => {
  const productsData = useProductsData();
  return (
    <div className='grid-column-4'>
      <filters />
      <div>
        {productsData.map((item) => {
          console.log(item);
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export { Products };
