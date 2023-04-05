import React, { useEffect, useState } from "react";
import Layout from "../../components/backbone";
import { getProducts } from "../../services/products";
import AnimatedHeroBackground from "../../components/hero";
import category from "../../assets/images/category.png";
import flight from "../../assets/images/flight.png";
import bill from "../../assets/images/bill.png";
import data from "../../assets/images/data.png";
import top from "../../assets/images/top.png";
import "./landing.css";
import FixedNavFooter from "../../components/NavFooter";
import ContentHeader from "../../components/ContentHeader";
import AllProducts from "../../components/products";
import FixedNavbar from "../../components/topbar";

export default function EntryPage() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const activeIndex = 0;
  //Get books from API
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getProducts().then((products) => {
      if (mounted) {
        setProducts(products);
        setIsLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  const backgrounds = [0, 1, 2];

  return (
    <Layout>
      <FixedNavbar />

      <div className="content-area">
        <AnimatedHeroBackground />
        <div className="category">
          <div className="icons-container">
            <div className="icon-item">
              <img src={category} alt="icon1" />
              <p>Category</p>
            </div>
            <div className="icon-item">
              <img src={flight} alt="icon2" />
              <p>Flight</p>
            </div>
            <div className="icon-item">
              <img src={bill} alt="icon3" />
              <p>Bill</p>
            </div>
            <div className="icon-item">
              <img src={data} alt="icon4" />
              <p>Data plan</p>
            </div>
            <div className="icon-item">
              <img src={top} alt="icon5" />
              <p>Top Up</p>
            </div>
          </div>
          <div className="indicator-container">
            {backgrounds.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
        <div className="product-bg">
          <ContentHeader />
          <div className="product-container">
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              products.map((product) => (
                <AllProducts key={product.productId} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
      <FixedNavFooter />
    </Layout>
  );
}
