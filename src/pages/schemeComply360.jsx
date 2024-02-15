import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/schemeComplyImg1.jpg";
import { HeroImage } from "../components/heroImage";

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
            Simplify Compliance Reporting with
            <br />
            <span className=" relative inline-block">
              Automation
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
            <p>
              To facilitate the clearing process by card schemes such as
              MasterCard, <br /> network members are expected to provide
              scheme-compliant reports on <br /> a regular basis, to power the
              exchange of funds among members. <br /> Failure to provide
              accurate and timely report could result in fines or <br /> even
              suspension from the network. On the MasterCard Network, one <br />{" "}
              such report is the Global Collection Only (GCO) Reporting.
            </p>
            <p>
              The GCO is a program of MasterCard Corporation pursuant to which{" "}
              <br /> a Customer must provide collection-only reporting of
              non-Processed <br />
              Transactions effected with a Card, Access Device, or Account
              issued <br /> under a Mastercard-assigned BIN.
            </p>
            <p>
              These reports are formatted in a proprietary Integrated Product
              Message <br /> or IPM format. Because of the complexity of the
              file and blocking formats <br /> used in Mastercard IPM file
              formats, sometimes, much of the valuable data <br /> described
              above is not immediately available for digestion by Mastercard
              members.
            </p>
            <p>
              SchemeComply360 for GCO Reporting is an easy to use and automated
              platform <br /> that enables MasterCard members to generate and
              send MasterCard GCO reports <br /> at the click of a button and
              stay compliant with their membership obligations thereby <br />{" "}
              helping to eliminate the cost and penalty fines that is imposed by
              MasterCard for <br />
              non-compliance.
            </p>
            <p>
              Compliance report for other schemes are also available as optional
              add-ons to <br /> SchemeComply360.
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
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <DummyImg />
        </section>
      </AnimatedContent>
    </>
  );
};
