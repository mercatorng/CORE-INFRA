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
import img1 from "../assets/CardPinHero.svg";

export const CardAndPinSolution = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);
  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);
  const { isVisible: isVisibleSection5 } = useScrollVisibility(section5Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const section3data = [
    {
      id: 0,
      content:
        " Streamline the process of requesting new cards, replacement cards, or additional cards with ease.",
      title: "Card Requests:",
    },
    {
      id: 1,
      content:
        " Empower customers to select their Personal Identification Numbers (PINs) and activate their cards securely.",
      title: "PIN Selection and Card Activation: ",
    },
    {
      id: 3,
      content:
        " Simplify the reissuance process and provide customers with real-time visibility into their card delivery status.",
      title: "Card Reissuance and Delivery Management: ",
    },
    {
      id: 2,
      content:
        " Enable customers to promptly report and manage lost or stolen cards, minimizing potential risks.",
      title: "Card Hotlisting and Deactivation: ",
    },
  ];

  return (
    <>
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="   px-3 md:px-16 lg:px-28">
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            <span className=" relative inline-block">
              Elevate
              <GreenUnderline />
            </span>{" "}
            Your Card Services with Our Comprehensive Card and PIN Solution
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

      {/* hero */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"hero"} />
        </div>
      </AnimatedContent>

      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <div className=" grid gap-y-8 md:text-2xl ">
            <p>
              Providing exceptional card services is paramount for card issuers
              seeking to enhance customer satisfaction and loyalty.{" "}
            </p>
            <p>
              Our cutting-edge Card and PIN Solution is designed to empower you
              with a secure and robust platform for managing all card and
              PIN-related service requests, ensuring a seamless and secure
              experience for your customers.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Seamless and Secure Card Management, Anytime, Anywhere
          </h1>
          <div className=" grid gap-y-8 md:text-2xl">
            <p>
              Our solution offers a comprehensive suite of features, enabling
              your customers to initiate and complete a wide range of
              card-related requests through convenient Card-Not-Present
              channels, such as mobile banking apps, internet banking, IVR, and
              USSD:
            </p>
            <ul className=" list-disc  pl-4 md:pl-12 mt-4  grid gap-y-4">
              {section3data.map(({ id, content, title }) => (
                <li key={id}>
                  <span className=" font-medium">{title}</span> {content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Unparalleled Security and Compliance
          </h1>
          <div className=" grid gap-y-4 md:text-2xl">
            <p>
              Prioritizing the protection of sensitive information, our Card and
              PIN Solution employs robust encryption protocols and secure
              communication channels, ensuring the utmost security and
              compliance with industry standards. Our commitment to data privacy
              and regulatory adherence provides you and your customers with
              peace of mind.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section5 */}
      <AnimatedContent isVisible={isVisibleSection5}>
        <section ref={section5Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Seamless Integration and Omnichannel Experience
          </h1>
          <div className=" grid gap-y-8 md:text-2xl">
            <p>
              Through standards-based APIs, our solution integrates seamlessly
              with your existing card issuance systems and channels, enabling a
              consistent and intuitive experience across all touchpoints.
              Customers can conveniently initiate and track card-related
              requests through their preferred channels, fostering a superior
              user experience and driving customer satisfaction.
            </p>
            <p>
              Elevate your card services to new heights with our comprehensive
              Card and PIN Solution. Partner with us today and unlock the full
              potential of secure, convenient, and customer-centric card
              management capabilities.
            </p>
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
