import { GreenUnderline } from "../components/greenUnderline";
import {
  LetsTalkButton,
  OpenAboutPageButton,
  RequestDemoButton,
} from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/issuingHero.png";
import { HeroImage } from "../components/heroImage";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

export const IssuingAsAServicePlatform = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);
  const { isVisible: isVisibleSection5 } = useScrollVisibility(section5Ref);
  const { isVisible: isVisibleSection6 } = useScrollVisibility(section6Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const section3data = [
    {
      id: 0,
      content:
        " Issue virtual and physical cards tailored to the unique needs of each fintech partner, accommodating innovative use cases and solutions.",
      title: "Card Issuance:",
    },
    {
      id: 1,
      content:
        " Robust transaction processing capabilities, ensuring seamless and secure handling of card payments and settlements.",
      title: "Transaction Processing:",
    },
    {
      id: 3,
      content:
        " Streamlined fee sharing mechanisms, including Interchange Reimbursement Fee (IRF) management, fostering mutually beneficial partnerships.",
      title: "Fee Sharing:",
    },
    {
      id: 2,
      content:
        " Efficient dispute resolution processes, minimizing friction and enhancing the overall customer experience.",
      title: "Dispute Resolution:",
    },
  ];

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-28"
        >
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Seamless{" "}
            <span className=" relative inline-block">
              collaboration
              <GreenUnderline />
            </span>{" "}
            with <br /> Fintechs
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
      
      {/* hero*/}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage heroImg={img1} altText={"issuing as a service hero"} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Unlock the Power of Bank-Fintech Partnerships with Our Issuing as a
            Service Platform
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              Banks all over the world are realizing the benefits of partnership
              with Fintechs for various services. By leveraging the innovative
              solutions and disruptive technologies offered by fintechs, banks
              can enhance their product offerings, streamline operations, and
              deliver superior customer experiences.
            </p>
            <p className=" md:text-2xl">
              Introducing our cutting-edge Issuing as a Service Platform,
              designed to empower banks with the capability to seamlessly host
              and provide end-to-end issuing services to fintech partners.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
              End-to-End Issuing Capabilities, Unmatched Flexibility
            </h1>
            <div>
              <p className=" md:text-2xl">
                Our platform offers a comprehensive suite of issuing
                functionalities, enabling banks to support fintech partners with
                ease:
              </p>
              <ul className=" list-decimal pl-16 mt-4 md:text-2xl grid gap-y-4">
                {section3data.map(({ id, content, title }) => (
                  <li key={id}>
                    <span className=" font-medium">{title}</span> {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* section 4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className="   px-3 md:px-16 lg:px-28  mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Seamless Integration, Secure and Compliant
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              Our Issuing as a Service Platform is designed for seamless
              integration within your bank's existing infrastructure, ensuring
              complete control and oversight. With robust security measures and
              adherence to industry standards and regulations, you can
              confidently offer issuing services while maintaining the highest
              levels of data protection and compliance.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 5 */}
      <AnimatedContent isVisible={isVisibleSection5}>
        <section ref={section5Ref} className="   px-3 md:px-16 lg:px-28 mb-16 ">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Empower Fintech Partnerships, Drive Innovation
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              By leveraging our Issuing as a Service Platform, your bank can
              position itself as the preferred partner for fintechs seeking
              issuing capabilities. Foster innovation, unlock new revenue
              streams, and stay ahead of the competition by collaborating with
              the dynamic fintech ecosystem.
            </p>
            <p className=" md:text-2xl">
              Unlock the full potential of bank-fintech partnerships and shape
              the future of the financial industry.
            </p>
          </div>
          <RequestDemoButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>

      {/* section 6 */}
      <AnimatedContent isVisible={isVisibleSection6}>
        <section ref={section6Ref} className="   px-3 md:px-16 lg:px-28 ">
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
