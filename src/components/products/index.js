import React from "react";
import "./products.css";

export default function AllProducts({product, key}) {
    console.log(product)
  return (
    <div className="product-card" key={key}>
      <img src={product.productImage} alt={product.productName} />
      <h3>{product.productName}</h3>
    </div>
  );
}
