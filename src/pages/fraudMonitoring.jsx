import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/fraudMonitoring.jpg";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const FraudMonitoring = () => {
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
            Smart{" "}
            <span className=" relative inline-block">
              Fraud
              <GreenUnderline />
            </span>{" "}
            Monitoring
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
          <HeroImage heroImg={img1} altText={"report"} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Fraud Monitoring
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              From Account Take-Overs to sophisticated Card Not Present Frauds,
              anyone can be a victim.
            </p>
            <p className=" md:text-2xl">
              TranzWatch is our AI br powered fraud engine that provides an{" "}
              important security layer to your <br /> payment systems. Powered
              by intelligent rules engine and machine learning algorithm, <br />{" "}
              TranzWatch instantly detects and blocks suspicious transactions
              with industry leading accuracy.
            </p>
            <p className=" md:text-2xl">
              This real-time analysis triggers immediate alerts to both
              customers and banks, preventing losses <br /> before they happen.
              Unlike solutions that offers only rules based detection,
              TranzWatch combination <br /> of rules and machine learning offers
              peace of mind and unparalleled protection, securing your <br />
              financial institution and your customers' confidence.
            </p>
            <p className=" md:text-2xl">
              TranzWatch offers a comprehensive security stack that seamlessly{" "}
              integrates with your payment infrastructure, serving as the
              intelligence layer for all digital banking transactions,
              encompassing both account and card-based transactions.
            </p>
            <p className=" md:text-2xl">
              This is achieved through its robust Integration and Orchestration{" "}
              Engine that provides support to a variety <br /> of payment
              channels and interfaces such as ATM, POS, Mobile Banking, Internet
              Banking, <br />
              IVR, USSD, and Kiosk
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
