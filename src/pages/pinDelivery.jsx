import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/engageNotifyImg1.jpg";
import { DummyImg } from "./bespokePayment";

export const PinDelivery = () => {
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
            PINGenie: A Card <br /> PIN(Data) Management <br />
            <span className=" relative inline-block">
              Solution
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
        <div ref={heroImgRef} className=" bg-black h-[40vh] my-12 "></div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Pin Delivery Solution
          </h1>
          <div className=" flex flex-col gap-y-8 md:text-2xl">
            <p>
              PINGenie is a comprehensive pin management solution <br /> that
              ensures the security of your PIN data from the moment <br /> it's
              received, through credential management, all the way to <br /> the
              secure delivery of those PINs to cardholders via a <br />{" "}
              proprietary security implementation.
            </p>
            <p>
              Crafted as a multifaceted service, PINGenie embodies a <br />{" "}
              secure end-to-end process, seamlessly managing data <br />{" "}
              reception, credential management, and post-delivery data <br />{" "}
              management.
            </p>
            <p>
              This electronic PIN delivery service not only assures high-level{" "}
              <br />
              of security but also grants issuers the <br /> unique ability to
              trace the PIN's journey all the way to the <br /> end consumer
              with full audit trail capabilities.
            </p>
            <p>
              <span className=" font-medium">Features</span>
              <ul className=" list-disc list-inside">
                <li>Supports PIN Issuance and Re-Issuance</li>
                <li>Secure PIN data storage</li>
                <li>Configurable delivery mechanism</li>
                <li>Multi-channel communication support</li>
                <li>Secure PIN delivery</li>
                <li>End-to-end PIN management lifecycle</li>
                <li>Flexible data management & recovery</li>
                <li>Card scheme-agnostic solution</li>
                <li>Secure integration to perso & card systems</li>
                <li>
                  Configurable PIN delivery model across multiple <br />{" "}
                  communication channels
                </li>
                <li>Analytics for informed decision making</li>
              </ul>
            </p>
            <p>
              <span className=" font-medium">Benefits</span>
              <span className=" block mb-2">
                Away with PIN Mailers! Finally, issuers can do away with the{" "}
                <br />
                cumbersome logistics’ challenges with Paper Mailers
              </span>
              <ul className=" list-disc list-inside flex flex-col gap-y-2">
                <li>
                  Reliable & Fast: Turn-around-Time for card issuance and <br />{" "}
                  use is shorter. Consumers get their PIN and are able to use{" "}
                  <br /> their card sooner! The time to first spend for new
                  accounts <br /> is reduced and activation rate is improved.{" "}
                </li>
                <li>
                  Efficient & Secure: Issuers are equipped to combine <br /> the
                  efficiency gain of a fully electronic service with cost saved{" "}
                  <br />
                  on paper PIN mailer production and delivery
                </li>
                <li>
                  Multi-channel support: PINGenie enables issuers to securely{" "}
                  <br />
                  issue PIN via multiple delivery channels - SMS, mobile
                  application, <br /> existing banking website or landline
                  phones (IVR)
                </li>
                <li>
                  {" "}
                  Dynamic Technology: PINGenie adopts globally proven <br />{" "}
                  technology and new digital delivery channels, letting go of{" "}
                  <br /> the old paper-based model
                </li>
              </ul>
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
