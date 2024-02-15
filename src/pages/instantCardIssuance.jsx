import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/engageNotifyImg1.jpg";
import { DummyImg } from "./bespokePayment";

export const InstantCardIssuance = () => {
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
            Introducing CoreInfra's <br />
            <span className=" relative inline-block">
              Instant
              <GreenUnderline />
            </span>{" "}
            Card Issuing and Management System: Empowering Faster, More
            Efficient Card Services
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
        <div ref={heroImgRef} className=" bg-black h-[40vh] my-12 "></div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Instant Card Issuance
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              In today's competitive financial landscape, card issuers <br />{" "}
              need to be agile and responsive to meet the ever-changing <br />{" "}
              needs of their customers. CoreInfra's Instant Card Issuing <br />{" "}
              and Management System is a powerful solution <br /> that empowers
              you to do just that.
            </p>
            <ul className=" list-disc list-inside md:text-2xl flex flex-col gap-y-4">
              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">Streamlined Workflow:</p>
                <li>
                  Our integrated workflow solution seamlessly connects <br />
                  centralized card operations with in-branch and agency <br /> banking
                  customer services, eliminating the need for <br /> manual processes
                  and data silos.
                </li>
                <li>
                  Branches and agency locations can now process card <br /> issuance
                  and personalization, handle card service functions <br /> typically
                  handled by a central card service team, all with <br /> a full audit
                  trail for complete transparency.
                </li>
              </div>

              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">Enhanced Efficiency:</p>
                <li>
                  The system enables bulk card production, centralized <br />
                  distribution of card stock, and PIN selection, saving you <br /> time
                  and resources.
                </li>
                <li>
                  Our full-featured APIs allow you to extend card service <br />
                  features to other customer touch points, such as mobile <br />
                  banking and USSD, for a truly omnichannel experience.
                </li>
              </div>

              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">
                  Improved Customer Satisfaction:
                </p>
                <li>
                  Faster card issuance and activation times lead to happier <br />
                  customers.
                </li>
                <li>
                  Self-service options through mobile and USSD channels <br /> empower
                  customers to manage their cards conveniently.
                </li>
                <li>
                  The centralized system ensures consistent service quality <br />
                  across all touchpoints.
                </li>
              </div>

              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">Benefits:</p>
                <li>Increased efficiency and productivity</li>
                <li>Reduced costs</li>
                <li>Improved customer satisfaction</li>
                <li>Faster time-to-market for new card products</li>
                <li>Enhanced security and compliance</li>
              </div>
            </ul>
            <p className=" md:text-2xl">
              Request a demo today and see how CoreInfra's Instant <br /> Card Issuing
              and Management System can help you <br /> transform your card services!
            </p>
          </div>
          <GlobalCTAButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
      {/* section 3 */}
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
