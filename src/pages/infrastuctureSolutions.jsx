import { GreenUnderline } from "../components/greenUnderline";
import {  LetsTalkButton, OpenAboutPageButton, RequestDemoButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img1 from "../assets/infrastructureImg1.jpg";
import img2 from "../assets/infrastructureImg2.png";
import img3 from "../assets/infrastructureImg3.png";

export const InfrastuctureSolutions = () => {
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
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Robust infrastructure for secure <br />{" "}
            <span className=" relative inline-block">
              financial
              <GreenUnderline />
            </span>{" "}
            operations
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <OpenAboutPageButton text={"Explore More"} style={" bg-gray-200   "} />
            <LetsTalkButton />
          </div>
        </section>
      </AnimatedContent>
      {/* hero image */}
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
            Infrastructure Solutions
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              Pavilion is a full suite Digital Banking infrastructure that
              allows financial institutions to offer an array of new and
              exciting digital banking services to their customers across
              various channels – ATM, POS, WEB, MOBILE, USSD, NFC, QR, KIOSK
              etc.
            </p>
            <p className=" md:text-2xl">
              Leverage your existing investment in Payments Infrastructure and
              your Card Management System; Extend your mobile banking offering
              with fully EMV compliant digital banking services. Connect
              Multiple systems to your Switch and FEP to offer an array of new
              services targeted at the digital natives.
            </p>
            <p className=" md:text-2xl">
              Pavilion empowers Financial institutions and Fintech firms to
              offer a full bouquet of EMV Compliant payment services across
              their Omni-channel platforms.
            </p>
          </div>
          <RequestDemoButton
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
          <SectionTwoImages
            img1={img2}
            img2={img3}
            altText={"starlight"}
            altText2={"radio waves on laptop"}
          />
        </section>
      </AnimatedContent>
    </>
  );
};
