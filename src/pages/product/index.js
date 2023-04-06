import React from "react";
import Layout from "../../components/backbone";
import { productList } from "../../services/data";
import { useParams } from "react-router-dom";
import "./product-details.css";
import Staggered from "../../components/Staggered/staggered";
import Tabs from "../../components/Tabs";

export default function ProductDescription() {
  const { id } = useParams();
  const product = productList?.find((p) => p.productId === parseInt(id));

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
      <div className="main-product-details">
        <Staggered delay={0}>
          <div className="product-image-wrapper">
            <img
              src={product?.productImage[0]}
              alt="Main Product"
              className="main-image"
            />
            <div className="thumbnails">
              {product?.productImage.map((image, index) => (
                <img src={image} key={index} alt={product?.productName} />
              ))}
            </div>
          </div>
        </Staggered>
        <Staggered delay={150}>
          <div className="all-desc">
            <div className="product-details-wrapper">
              <div className="thrift">
                <img
                  src={require("../../assets/images/thrift.png")}
                  alt="thrift"
                />
                <span>tokobaju.id</span>
              </div>
            </div>
            <h1 className="p-name">{product?.productName}</h1>
            <div className="rate-price-desc">
              <span>
                <span style={{ marginRight: "15px" }}>
                  ⭐ {product?.rating} Ratings
                </span>{" "}
                ●{" "}
                <span style={{ marginLeft: "15px", marginRight: "15px" }}>
                  2.3k+ Reviews
                </span>{" "}
                ● <span style={{ marginLeft: "15px" }}>2.9k+ Sold</span>
              </span>
            </div>
            <Tabs>
              <div className="d-flex first">
                <p>
                  Brand: <span>{product?.brand}</span>
                </p>
                <p>
                  Color: <span>{product?.color}</span>
                </p>
              </div>
              <div className="d-flex one">
                <p>
                  Category: <span>Casual Shirt</span>
                </p>
                <p>
                  Material: <span>Polyester</span>
                </p>
              </div>
              <div className="d-flex two">
                <p>
                  Condition: <span>New</span>
                </p>
                <p>
                  Heavy: <span>200 g</span>
                </p>
              </div>
              <br />
              <hr />
              <br />
              <h1 className="desc-h1">Description:</h1>
              <ul>
                <li>Long-sleeve dress shirt in classic fit featuring button down collar</li>
                <li>Patch Pocket on Left Chest</li>
                <li>Durable Combination Cotton Fabric</li>
                <li>Comfortable and quality dress shirt</li>
                <li>Go to Classic button down shirt for all special occasions</li>
              </ul>

              <p className="chat">Chat us if there's anything you need to ask about the product :)</p>
            </Tabs>
          </div>
        </Staggered>
      </div>
      <Staggered delay={300}>
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
      </Staggered>
    </Layout>
  );
}
