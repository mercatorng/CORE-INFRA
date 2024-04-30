import { GreenUnderline } from "../components/greenUnderline";
import {  LetsTalkButton, OpenAboutPageButton, RequestDemoButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/pinDelivery.jpg";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

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
            PINGenie: A Card <br /> PIN(Data) Management
            <span className=" relative inline-block">
              Solution
              <GreenUnderline />
            </span>{" "}
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <OpenAboutPageButton text={"Explore More"} style={" bg-gray-200   "} />
            <LetsTalkButton />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage altText={"bespoke hero"} heroImg={img1} />
        </div>
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
              PINGenie is a comprehensive pin management solution that ensures
              the security of your PIN data from the moment it's received,
              through credential management, all the way to the secure delivery
              of those PINs to cardholders via a proprietary security
              implementation.
            </p>
            <p>
              Crafted as a multifaceted service, PINGenie embodies a secure
              end-to-end process, seamlessly managing data reception, credential
              management, and post-delivery data management.
            </p>
            <p>
              This electronic PIN delivery service not only assures high-level
              of security but also grants issuers the unique ability to trace
              the PIN's journey all the way to the end consumer with full audit
              trail capabilities.
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
                  Configurable PIN delivery model across multiple communication
                  channels
                </li>
                <li>Analytics for informed decision making</li>
              </ul>
            </p>
            <p>
              <span className=" font-medium">Benefits</span>
              <span className=" block mb-2">
                Away with PIN Mailers! Finally, issuers can do away with the
                cumbersome logistics’ challenges with Paper Mailers
              </span>
              <ul className=" list-disc list-inside flex flex-col gap-y-2">
                <li>
                  Reliable & Fast: Turn-around-Time for card issuance and use is
                  shorter. Consumers get their PIN and are able to use their
                  card sooner! The time to first spend for new accounts is
                  reduced and activation rate is improved.{" "}
                </li>
                <li>
                  Efficient & Secure: Issuers are equipped to combine the
                  efficiency gain of a fully electronic service with cost saved
                  on paper PIN mailer production and delivery
                </li>
                <li>
                  Multi-channel support: PINGenie enables issuers to securely{" "}
                  issue PIN via multiple delivery channels - SMS, mobile
                  application, existing banking website or landline phones (IVR)
                </li>
                <li>
                  {" "}
                  Dynamic Technology: PINGenie adopts globally proven technology
                  and new digital delivery channels, letting go of the old
                  paper-based model
                </li>
              </ul>
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
