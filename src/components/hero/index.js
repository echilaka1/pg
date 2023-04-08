import React, { useState, useEffect } from "react";
import { useSprings, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import "./hero.css";
import heroBg from "../../assets/images/hero-background.png";
import heroBg2 from "../../assets/images/hero.png";

const AnimatedHeroBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = [`url(${heroBg})`, `url(${heroBg2})`];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change the auto-scroll interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [backgrounds.length, setActiveIndex]);

  const handleChange = (newIndex) => {
    if (newIndex >= 0 && newIndex < backgrounds.length) {
      setActiveIndex(newIndex);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChange(activeIndex + 1),
    onSwipedRight: () => handleChange(activeIndex - 1),
  });

  const springs = useSprings(
    backgrounds.length,
    backgrounds.map((_, index) => ({
      left: `${(index - activeIndex) * 100}%`,
      config: { duration: 300 },
    }))
  );

  return (
    <div className="hero-container">
      <div {...swipeHandlers}>
        {springs.map((props, index) => (
          <animated.div
            key={index}
            className="hero-bg"
            style={{
              ...props,
              background: backgrounds[index],
            }}
          />
        ))}

        {/* <div className="indicator-container">
       {backgrounds.map((_, index) => (
         <div
           key={index}
           className={`indicator ${index === activeIndex ? "active" : ""}`}
           onClick={() => handleChange(index)}
         />
       ))}
     </div> */}
      </div>
    </div>
  );
};

export default AnimatedHeroBackground;
