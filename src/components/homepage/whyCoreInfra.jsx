import { useEffect, useRef, useState } from "react";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import AnimatedContent from "../animatedContent";

export const WhyCoreInfra = () => {
  const headerContentRef = useRef(null);
  const { isVisible: headerContentContainer } =
    useScrollVisibility(headerContentRef);

  const contentContainerRef = useRef(null);
  const { isVisible: contentContainer } =
    useScrollVisibility(contentContainerRef);

  const benefitsData = [
    {
    
      points: [
        "Pioneers in the African financial tech scene",
        "An expanding network of satisfied clients",
        "Strong ties with industry leaders",
        "A tech stack proven across the continent",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const itemRefs = useRef([]);
  const containerRef = useRef(null); // Ref for the scroll container
  const touchStartY = useRef(0);

  // Debounce function to limit scroll events
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handle scroll events
  const handleScroll = debounce((deltaY) => {
    if (isScrolling) return; // Lock scroll until transition is complete

    if (deltaY > 0) {
      // Scroll down
      setActiveIndex((prev) => Math.min(prev + 1, benefitsData.length - 1));
    } else if (deltaY < 0) {
      // Scroll up
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 480); // Adjust this timeout to match transition duration
  }, 100);

  // Handle wheel event (desktop)
  const handleWheel = (e) => {
    handleScroll(e.deltaY);
  };

  // Handle touch events (mobile)
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY; // Record touch start position
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY; // Record touch end position
    const deltaY = touchStartY.current - touchEndY; // Calculate swipe direction

    if (Math.abs(deltaY) > 10) {
      // Only trigger if the swipe is significant
      handleScroll(deltaY);
    }
  };

  // Calculate the height and position of the colored part
  function calculateProgressBar() {
    let totalHeight = 0;
    let activeItemHeight = 0;

    // Sum the heights of all items up to the active index
    for (let i = 0; i < activeIndex; i++) {
      if (itemRefs.current[i]) {
        totalHeight += itemRefs.current[i].clientHeight;
      }
    }

    // Get the height of the active item
    if (itemRefs.current[activeIndex]) {
      activeItemHeight = itemRefs.current[activeIndex].clientHeight;
    }

    return {
      height: activeItemHeight - 24,
      offset: totalHeight,
    };
  }

  const { height, offset } = calculateProgressBar();

  // Calculate the total height of the content (excluding the last item's padding)
  const calculateTotalHeight = () => {
    let totalHeight = 0;
    itemRefs.current.forEach((item, index) => {
      if (item) {
        totalHeight += item.clientHeight;
      }
    });
    return totalHeight - 24; // Subtract 24px for the last item's padding
  };

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;

    // Desktop: Add wheel event listener
    container.addEventListener("wheel", handleWheel);

    // Mobile: Add touch event listeners
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      // Cleanup event listeners
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  return (
    <section className=" mx-auto relative z-50 py-[88px]  bg-[#D9D9D9] px-5">
      <div className="container mx-auto max-w-[1121px]">
      <AnimatedContent isVisible={headerContentContainer}>
        
        <div ref={headerContentRef} className="mb-10 ">
          <h1 className=" text-xl md:text-3xl lg:text-[40px] font-bold mb-6 font-aileron">
            Why CoreInfra?
          </h1>
          <p className="text-lg font-instrument">
            Financial institutions today face a common challenge:
          </p>
          <p className="text-lg font-semibold font-instrument">legacy systems were never designed for modern product velocity, digital channels, or modular growth.</p>
        </div>
      </AnimatedContent>
      {/* services */}
      <AnimatedContent isVisible={contentContainer}>
        <p className="pl-2 mb-4 text-lg font-instrument">CoreInfra helps institutions bridge that gap by providing:</p>
        <div ref={contentContainerRef} className="flex gap-4 h-fit ">
          {/* Custom Progress Bar */}
          <div
            className="w-[4px] shrink-0 rounded-md   bg-[#48BB78] relative"
            style={{ height: `${calculateTotalHeight()}px` }}
          >
            
          </div>
          <div className="w-full pr-8 scroll-container h-fit lg:pr-16 " ref={containerRef}>
            
                <ul
                  className={` list-disc list-inside pl-2 transition-all duration-500 ease-out opacity-100 translate-y-0 max-h-[400px]`}
                >
                  <li>Modular infrastructure that integrates with existing systems</li>
                  <li>Enterprise-grade reliability for mission-critical operations</li>
                  <li>Compliance-aware design suited for regulated environments</li>
                  <li>Flexible deployment models aligned with institutional policies</li>
                  <li>We are not a front-end app vendor.</li>
                  <li>We are the engine room behind financial services.</li>
                </ul>
          </div>
        </div>
      </AnimatedContent>
      </div>
    </section>
  );
};
