import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useEffect, useRef, useState } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/bespokeImg1.jpg";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const CardAndPinMgt = () => {
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
            Innovative Solutions for Card <br />
            <span className=" relative inline-block">
              Management
              <GreenUnderline />
            </span>{" "}
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
            Card Management and PIN
            <br />
            Management Solutions
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              Pavilion Card and PIN solution is a Module of the Pavilion Suite
              specially tailored to <br /> allow card issuers offer their
              customers a robust and versatile solution for managing <br /> all
              card and PIN related service requests - Card requests, PIN
              selection & Card activation,
              <br /> Reissuance, Delivery etc.
            </p>
            <p className=" md:text-2xl">
              The module provides a seamless and secure process through which
              account holders can <br /> initiate and complete all card-related
              requests via Card-Not-Present channels such as <br /> Mobile
              Banking app, Internet Banking app, IVR, USSD etc., with realtime
              access to <br /> status information.
            </p>
            <p className=" md:text-2xl">
              Through an exposure to the issuers’ channels via standards based
              APIs, the solution allows <br /> account holders to seamlessly
              initiate card requests, select their Personal Identification{" "}
              <br /> Numbers (PINs), manage the delivery, hotlist cards,
              activate & deactivate cards, thus <br /> providing an optimal
              balance between user convenience and robust security measures.
            </p>
            <p className=" md:text-2xl">
              This solution employs robust encryption protocols and secure
              communication channels to <br /> ensure the utmost protection of
              sensitive information, aligning with industry <br /> standards and
              compliance requirements.
            </p>
          </div>
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
          className=" text-black  px-3 md:px-16 lg:px-28 "
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
