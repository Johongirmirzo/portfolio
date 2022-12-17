import React, { useState, useEffect } from "react";

export const useMobile = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  useEffect(() => {
    // on initial load check if screen is smaller than 750 if so set mobile to true
    setIsMobileMenu(
      document.readyState === "complete" && window.innerWidth <= 992
        ? true
        : false
    );

    const getMobileSize = () => {
      setIsMobileMenu(false);
      if (window.innerWidth <= 992) {
        setIsMobileMenu(true);
      }
    };

    window.addEventListener("resize", getMobileSize);
    return () => window.removeEventListener("resize", getMobileSize);
  }, []);
  return isMobileMenu;
};
