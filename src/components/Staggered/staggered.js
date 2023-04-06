import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./staggered.css";

const Staggered = ({ children, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <CSSTransition in={visible} timeout={300} classNames="staggered-element">
      {children}
    </CSSTransition>
  );
};

export default Staggered;
