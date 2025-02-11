import { GreenUnderline } from "../components/greenUnderline";
import { RequestDemoButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/schemeComplyImg1.jpg";
import { HeroImage } from "../components/heroImage";

export const SchemeReportingAndCompliance = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const reportData = [
    "To facilitate the clearing process by card schemes such as MasterCard, network members are expected to provide scheme-compliant reports on a regular basis, to power the exchange of funds among members. Failure to provide accurate and timely reports could result in fines or even suspension from the network. On the MasterCard Network, one such report is the Global Collection Only (GCO) Reporting.",
    "The GCO is a program of MasterCard Corporation pursuant to which a Customer must provide collection-only reporting of non-Processed Transactions effected with a Card, Access Device, or Account issued under a Mastercard-assigned BIN.",
    "These reports are formatted in a proprietary Integrated Product Message or IPM format. Because of the complexity of the file and blocking formats used in Mastercard IPM file formats, sometimes, much of the valuable data described above is not immediately available for digestion by Mastercard members.",
    "SchemeComply360 for GCO Reporting is an easy-to-use and automated platform that enables MasterCard members to generate and send MasterCard GCO reports at the click of a button and stay compliant with their membership obligations thereby helping to eliminate the cost and penalty fines that are imposed by MasterCard for non-compliance.",
    "Compliance reports for other schemes are also available as optional add-ons to SchemeComply360.",
  ];

  return (
    <>
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="   px-3 md:px-16 lg:px-28">
          <h1 className="  relative z-20 font-bold mb-8 text-2xl md:text-4xl lg:text-5xl  w-fit ">
            <span className=" relative inline-block">
              Simplify
              <GreenUnderline />
            </span>{" "}
            Compliance <br /> Reporting with Automation
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <RequestDemoButton
              text={"Request a Demo"}
              style={" bg-ctaGreen  mt-6"}
            />
          </div>
        </section>
      </AnimatedContent>

      {/*hero */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage altText={"hero"} heroImg={img1} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className=" font-bold text-xl md:text-2xl lg:text-4xl mb-4">
            SchemeComply360
          </h1>
          <div className="flex flex-col gap-y-8">
            {reportData.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <RequestDemoButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
    </>
  );
};
