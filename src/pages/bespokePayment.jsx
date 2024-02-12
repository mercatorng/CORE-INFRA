import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/bespokeImg1.png";
import { HeroImage } from "../components/heroImage";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const BespokePayment = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

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
      {/* hero */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage altText={"bespoke hero"} heroImg={img1} />
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
          <SectionTwoImages
            img1={img2}
            img2={img3}
            altText={"laptop"}
            altText2={"laptop and debit card"}
          />
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
