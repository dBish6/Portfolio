import { useState, useLayoutEffect } from "react";
import { useSpring } from "framer-motion";

const useScrollTo = () => {
  const [moveTo, setScrollTo] = useState(null);
  useSpring(moveTo, { damping: 300, stiffness: 200 });

  useLayoutEffect(() => {
    if (moveTo !== null) {
      window.scrollTo({
        top: moveTo,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [moveTo]);

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    setScrollTo(targetElement.offsetTop - 100);
  };

  return handleScroll;
};

export default useScrollTo;
