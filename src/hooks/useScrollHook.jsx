import { useEffect, useRef, useState } from "react";

export const useScrollVisibility = (ref, shouldAnimateOnMount = false, threshold = 60) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = ref.current;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      const isElementVisible = scrollPosition > elementPosition - threshold;

      if (isElementVisible && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (shouldAnimateOnMount && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated, shouldAnimateOnMount]);

  return { isVisible, ref };
};
