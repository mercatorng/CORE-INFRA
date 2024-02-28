import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton, LetsTalkButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/schemeComplyImg1.jpg";
import { HeroImage } from "../components/heroImage";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const SchemeComply360 = () => {
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
            Simplify Compliance <br /> Reporting with{" "}
            <span className=" relative inline-block">
              Automation
              <GreenUnderline />
            </span>{" "}
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <GlobalCTAButton text={"Explore More"} style={" bg-gray-200   "} />
           
            <LetsTalkButton/>
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage altText={"hero"} heroImg={img1} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            SchemeComply360
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              To facilitate the clearing process by card schemes such as
              MasterCard, network members   are expected to provide
              scheme-compliant reports on a regular basis, to power the exchange{" "}
                of funds among members. Failure to provide accurate and
              timely report could result in fines or   even suspension from
              the network. On the MasterCard Network, one such report is the
              Global   Collection Only (GCO) Reporting.
            </p>
            <p className=" md:text-2xl">
              The GCO is a program of MasterCard Corporation pursuant to which a
              Customer must provide   collection-only reporting of
              non-Processed Transactions effected with a Card, Access Device,{" "}
                or Account issued under a Mastercard-assigned BIN.
            </p>
            <p className=" md:text-2xl">
              These reports are formatted in a proprietary Integrated Product
              Message or IPM format. Because   of the complexity of the
              file and blocking formats used in Mastercard IPM file
              formats, sometimes,   much of the valuable data described
              above is not immediately available for digestion by Mastercard
              members.
            </p>
            <p className=" md:text-2xl">
              SchemeComply360 for GCO Reporting is an easy to use and automated
              platform that enables   MasterCard members to generate and
              send MasterCard GCO reports  at the click of a button and  
              stay compliant with their membership obligations thereby {" "}
              helping to eliminate the cost and penalty   fines that is imposed by
              MasterCard for 
              non-compliance.
            </p>
            <p className=" md:text-2xl">
              Compliance report for other schemes are also available as optional
              add-ons to  SchemeComply360.
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
