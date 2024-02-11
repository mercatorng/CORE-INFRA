import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedContent = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default AnimatedContent;
