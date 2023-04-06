import React from "react";
import "./products.css";

export default function AllProducts({ product, onClick }) {
  // console.log(product);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product?.productImage[0]} alt={product?.productName} />
      </div>
      <div className="product-content">
        <h1>{product?.productTag}</h1>
        <h3 onClick={onClick}>{product?.productName}</h3>
        <div className="rate-price">
          <span>
            ⭐ {product?.rating} | {product?.comments}
          </span>
          <p>${product?.amount.toFixed(2)}</p>
        </div>
      </div>
      <div className="heart">
        <img src={require("../../assets/images/heart.png")} alt="heart" />
      </div>
    </div>
  );
}
