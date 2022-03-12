import React from "react";
import ProductCard from "../common/ProductCard";

const FlashSaleProducts = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleProducts;
