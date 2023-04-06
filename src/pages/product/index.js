import React from "react";
import Layout from "../../components/backbone";
import { productList } from "../../services/data";
import { useParams } from "react-router-dom";
import "./product-details.css";

export default function ProductDescription() {
  const { id } = useParams();

  const product = productList?.find((p) => p.productId === parseInt(id));

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <header className="cart-top">
        <div className="cart-nav">
          <div>
            <img
              src={require("../../assets/images/left.png")}
              alt="cart icon"
              onClick={() => window.history.back()}
              style={{cursor: "pointer"}}
            />
          </div>
          <div className="other-options">
            <img
              src={require("../../assets/images/heart-red.png")}
              alt="cart icon"
            />
            <img
              src={require("../../assets/images/share.png")}
              alt="cart icon"
            />
            <img
              src={require("../../assets/images/cart.png")}
              alt="notification icon"
            />
          </div>
        </div>
      </header>
      <p>Here</p>
      <footer className="footer-product">
        <div className="product-footer">
          <div>
            <p className="price">Total Price</p>
            <p className="amount">${product?.amount.toFixed(2)}</p>
          </div>
          <button type="submit" className="split-button">
            <span className="left-section">
              <img
                src={require("../../assets/images/cart.png")}
                alt="cart icon"
              />
              <span>1</span>
            </span>
            <span className="right-section">Buy Now</span>
          </button>
        </div>
      </footer>
    </Layout>
  );
}
