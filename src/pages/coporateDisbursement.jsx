import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/coporateImg1.jpg";

export const CoporateDisbursement = () => {
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
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Optimize disbursements with our{" "}
            <span className=" relative inline-block">
              automated
              <GreenUnderline />
            </span>{" "}
            platform
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <GlobalCTAButton text={"Explore More"} style={" bg-gray-200   "} />
            <GlobalCTAButton text={"Get in touch"} style={" bg-ctaGreen   "} />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"hero"} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Corporate Disbursement
            <br />
            Platform
          </h1>
          <p>
            Discover efficiency in managing financial transactions with our
            Corporate <br /> Disbursement Platform. Designed with automated
            payment workflows, this <br /> platform streamlines your
            disbursement processes, offering a transformative <br /> solution
            for corporate financial operations
          </p>
          <GlobalCTAButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section
          ref={section3Ref}
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <DummyImg />
        </section>
      </AnimatedContent>
    </>
  );
};
