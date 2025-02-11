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
      header: "Tech Advantage",
      points: [
        "Built on cloud-native technology for ultimate flexibility",
        "99.99% uptime to keep your operations running",
        "Real-time analytics for informed decisions",
        "Top-tier security to protect your data",
        "Compliance tools that automate the hard work",
      ],
    },
    {
      header: "Business Benefits",
      points: [
        "Cut implementation time by up to 60%",
        "Reduce operational costs by 40%",
        "Scale without limits",
        "Stay ahead with future-ready technology",
      ],
    },
    {
      header: "Our Edge",
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
    <section className="bg-vignette relative z-50 pl-8 py-8  mx-8 lg:pl-16 lg:py-16 lg:mx-16 text-white">
      <AnimatedContent isVisible={headerContentContainer}>
        <div ref={headerContentRef} className=" mb-20 pr-8 lg:pr-16 ">
          <h1 className=" text-xl md:text-3xl lg:text-[40px] font-bold mb-6">
            Why CoreInfra?
          </h1>
          <p className="  md:text-2xl ">
            We deliver cutting-edge and distinctive solutions crafted to propel
            your business into the forefront of the finance and technology
            landscape, ensuring you stay ahead of the competition
          </p>
        </div>
      </AnimatedContent>
      {/* services */}
      <AnimatedContent isVisible={contentContainer}>
        <div ref={contentContainerRef} className="flex   gap-4  h-fit ">
          {/* Custom Progress Bar */}
          <div
            className="w-[2px] shrink-0 rounded-md   bg-white relative"
            style={{ height: `${calculateTotalHeight()}px` }}
          >
            <div
              className="w-[4px] rounded-md bg-[#04B757] absolute top-0 -left-[50%] -translate-x-[50%] transition-all duration-500 ease-out"
              style={{
                height: `${height}px`,
                transform: `translateY(${offset}px)`,
              }}
            />
          </div>
          <div className="scroll-container h-fit w-full pr-8 lg:pr-16 " ref={containerRef}>
            {benefitsData.map(({ header, points }, index) => (
              <div
                key={index}
                className="pb-6"
                ref={(el) => (itemRefs.current[index] = el)}
              >
                {/* Always show the header */}
                <h2 className="font-bold text-xl lg:text-3xl mb-2">{header}</h2>
                <ul
                  className={` list-disc list-inside pl-2 transition-all duration-500 ease-out  ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0 max-h-[400px]"
                      : "opacity-0 translate-y-4 max-h-0 "
                  }`}
                >
                  {points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};
