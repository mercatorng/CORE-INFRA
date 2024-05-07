import { GreenUnderline } from "../components/greenUnderline";
import {
  LetsTalkButton,
  OpenAboutPageButton,
  RequestDemoButton,
} from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/instantCardHero.png";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const InstantCardSolution = () => {
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
            Empowering More{" "}
            <span className=" relative inline-block">
              Faster,
              <GreenUnderline />
            </span>{" "}
            Efficient Card Services
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <OpenAboutPageButton
              text={"Explore More"}
              style={" bg-gray-200   "}
            />
            <LetsTalkButton />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"instant card solution hero"} />
        </div>
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
              In today's competitive financial landscape, card issuers need to
              be agile and responsive to meet the ever-changing needs of their
              customers. CoreInfra's Instant Card Issuing and Management System
              is a powerful solution that empowers you to do just that.
            </p>
            <ul className=" list-disc list-inside md:text-2xl flex flex-col gap-y-4">
              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">Streamlined Workflow:</p>
                <li>
                  Our integrated workflow solution seamlessly connects
                  centralized card operations with in-branch and agency banking
                  customer services, eliminating the need for manual processes
                  and data silos.
                </li>
                <li>
                  Branches and agency locations can now process card issuance
                  and personalization, handle card service functions typically
                  handled by a central card service team, all with a full audit
                  trail for complete transparency.
                </li>
              </div>

              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">Enhanced Efficiency:</p>
                <li>
                  The system enables bulk card production, centralized
                  distribution of card stock, and PIN selection, saving you time
                  and resources.
                </li>
                <li>
                  Our full-featured APIs allow you to extend card service
                  features to other customer touch points, such as mobile
                  banking and USSD, for a truly omnichannel experience.
                </li>
              </div>

              <div className=" flex flex-col gap-y-2">
                <p className=" font-semibold">
                  Improved Customer Satisfaction:
                </p>
                <li>
                  Faster card issuance and activation times lead to happier
                  customers.
                </li>
                <li>
                  Self-service options through mobile and USSD channels empower
                  customers to manage their cards conveniently.
                </li>
                <li>
                  The centralized system ensures consistent service quality
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
              Request a demo today and see how CoreInfra's Instant Card Issuing
              and Management System can help you transform your card services!
            </p>
          </div>
          <RequestDemoButton
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
