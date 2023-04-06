import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/backbone";
import { productList } from "../../services/data";
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
import { useNavigate } from "react-router-dom";

export default function EntryPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const activeIndex = 0;

  const backgrounds = [0, 1, 2];

  const productPage = (product) => {
    navigate("/product/" + product.productId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const heroVisible = entries[0].isIntersecting;
        setScrolled(!heroVisible);
      },
      {
        threshold: 0,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <FixedNavbar scrolled={{ scrolled }} />
      <div className="content-area">
        <AnimatedHeroBackground ref={heroRef} />
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
            {productList.map((product) => (
              <React.Fragment key={product.productId}>
                <AllProducts
                  onClick={() => productPage(product)}
                  product={product}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <FixedNavFooter />
    </Layout>
  );
}
