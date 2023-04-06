import React, { useState } from "react";
import Layout from "../../components/backbone";
import { productList } from "../../services/data";
import { useParams } from "react-router-dom";
import "./product-details.css";
import { CSSTransition } from "react-transition-group";

export default function ProductDescription() {
  const { id } = useParams();
  const [done, setDone] = useState(false);

  const onEntered = () => {
    setDone(true);
  };

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
              style={{ cursor: "pointer" }}
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
            <div className="cart-icon-wrapper">
              <img
                src={require("../../assets/images/cart.png")}
                alt="notification icon"
              />
              <span className="badge">1</span>
            </div>
          </div>
        </div>
      </header>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="product-details"
        onEntered={onEntered}
      >
        <div
          className={`product-details ${done ? "product-details-done" : ""}`}
        >
          <div className="main-product-details">
            <h1>Here</h1>
          </div>
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
        </div>
      </CSSTransition>
    </Layout>
  );
}
