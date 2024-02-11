import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedContent = ({ isVisible, children }) => {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(15px)",
    },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(15px)",
    },
    config: { tension: 80, friction: 20 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default AnimatedContent;
