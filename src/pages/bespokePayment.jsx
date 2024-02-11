import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../components/animatedContent";

export const BespokePayment = () => {
  const [hasAnimatedSection1, setHasAnimatedSection1] = useState(false);
  const [hasAnimatedSection2, setHasAnimatedSection2] = useState(false);
  const [hasAnimatedSection3, setHasAnimatedSection3] = useState(false);
  const [hasAnimatedBlackWhiteImg, setHasAnimatedBlackWhiteImg] =
    useState(false);

  const [isVisibleSection1, setIsVisibleSection1] = useState(false);
  const [isVisibleSection2, setIsVisibleSection2] = useState(false);
  const [isVisibleSection3, setIsVisibleSection3] = useState(false);
  const [isVisibleBlackWhiteImg, setIsVisibleBlackWhiteImg] = useState(false);

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const blackWhiteImgRef = useRef();

  const handleScroll = () => {
    checkVisibility(
      section1Ref,
      setIsVisibleSection1,
      hasAnimatedSection1,
      setHasAnimatedSection1
    );
    checkVisibility(
      section2Ref,
      setIsVisibleSection2,
      hasAnimatedSection2,
      setHasAnimatedSection2
    );
    checkVisibility(
      section3Ref,
      setIsVisibleSection3,
      hasAnimatedSection3,
      setHasAnimatedSection3
    );
    checkVisibility(
      blackWhiteImgRef,
      setIsVisibleBlackWhiteImg,
      hasAnimatedBlackWhiteImg,
      setHasAnimatedBlackWhiteImg
    );
  };

  const checkVisibility = (ref, setIsVisible, hasAnimated, setHasAnimated) => {
    const element = ref.current;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      // Adjust the threshold as needed
      const threshold = 200;

      const isVisible = scrollPosition > elementPosition - threshold;

      if (isVisible && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    // Only animate the first section on mount
    setIsVisibleSection1(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    hasAnimatedSection1,
    hasAnimatedSection2,
    hasAnimatedSection3,
    hasAnimatedBlackWhiteImg,
  ]);

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-24 "
        >
          <div>
            <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
              Elevate your transactions with <br /> custom{" "}
              <span className=" relative inline-block">
                {" "}
                payment
                <GreenUnderline />
              </span>{" "}
              software
            </h1>
            {/* buttons */}
            <div className=" flex flex-wrap gap-4">
              <GlobalCTAButton
                text={"Explore More"}
                style={" bg-gray-200   "}
              />
              <GlobalCTAButton
                text={"Get in touch"}
                style={" bg-ctaGreen   "}
              />
            </div>
          </div>
        </section>
      </AnimatedContent>
      {/* black white boxes */}
      <AnimatedContent isVisible={isVisibleBlackWhiteImg}>
        <div ref={blackWhiteImgRef}>
          <BlackWhiteImgComp />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-24  mb-16"
        >
          <div>
            <h1 className=" text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
              Payment Software <br /> Development
            </h1>
            <p className=" md:text-2xl">
              At CoreInfra, we specialize in crafting tailor-made payment
              software solutions <br /> that empower your business to thrive in
              today's dynamic financial landscape. <br /> Our team of experts
              collaborates with you to design a strategy that aligns <br />{" "}
              seamlessly with your business goals, ensuring every transaction is
              a step <br /> toward enhanced profitability and efficiency
            </p>
            <GlobalCTAButton
              text={"Get started"}
              style={" bg-ctaGreen  mt-6"}
            />
          </div>
        </section>
      </AnimatedContent>
      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section
          ref={section3Ref}
          className=" text-black  px-3 md:px-16 lg:px-24 "
        >
          <DummyImg />
        </section>
      </AnimatedContent>
    </>
  );
};

export const DummyImg = () => {
  return (
    <>
      <div className=" bg-black rounded-md h-[50vh] md:h-[40vh]"></div>
      <div className=" flex gap-8 justify-between mt-8">
        <div className=" bg-gray-300 rounded-md h-[40vh]  w-[50vw]"></div>
        <div className=" bg-gray-300 rounded-md h-[40vh] w-[50vw]"></div>
      </div>
    </>
  );
};
