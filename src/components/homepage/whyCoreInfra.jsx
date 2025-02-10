import { useEffect, useRef, useState } from "react";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import AnimatedContent from "../animatedContent";

export const WhyCoreInfra = () => {
  const headerContentRef = useRef(null);

  const { isVisible: headerContentContainer } =
    useScrollVisibility(headerContentRef);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const itemHeight = e.target.scrollHeight / benefitsData.length;
    const newIndex = Math.floor(scrollTop / itemHeight);
    setActiveIndex(newIndex);
  };

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

  return (
    <section className=" bg-vignette relative z-50 p-8  mx-8 lg:p-16 lg:mx-16 text-white">
      <AnimatedContent isVisible={headerContentContainer}>
        <div ref={headerContentRef} className=" mb-12 ">
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
      <div
        className="h-96 overflow-y-auto border border-gray-200 p-4"
        onScroll={handleScroll}
      >
        <div className="space-y-4">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg">{benefit.header}</h3>
              {activeIndex === index && (
                <ul className="mt-2 space-y-2">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="text-gray-600">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
