import { createContext, useState, useEffect, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const subContainerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = subContainerRef.current.scrollTop > 50;
      setScrolled(isScrolled);
    };

    if (subContainerRef.current) {
      subContainerRef.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (subContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        subContainerRef.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [subContainerRef]);

  return (
    <ScrollContext.Provider value={{ scrolled, subContainerRef }}>
      <div className="sub-container" ref={subContainerRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
