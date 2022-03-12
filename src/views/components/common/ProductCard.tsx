import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex min-h-fit flex-col">
        <div>
          <img
            src="https://static-01.daraz.com.bd/p/6ec0b5c41e6113e19c2ff238fe583fa9.jpg"
            alt=""
            className="h-64 w-96"
          />
        </div>
        <div>
          <h5>Product title</h5>
          <h6>$250</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
