import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const ContentHeader = () => {
  const [isFixed, setIsFixed] = useState(false);
  const contentHeaderRef = useRef();
  const sentinelRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="sentinel"></div>
      <header
        ref={contentHeaderRef}
        className={`content-header ${isFixed ? "fixed" : ""}`}
      >
        <div className="all-product-header">
          <h1>Best Sale Product</h1>
          <p>See more</p>
        </div>
      </header>
    </>
  );
};

export default ContentHeader;
