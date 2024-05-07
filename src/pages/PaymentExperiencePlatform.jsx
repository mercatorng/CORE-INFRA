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
import img1 from "../assets/paymentExperienceHero.svg";
import img2 from "../assets/engageNotifyImg2.png";
import { SectionTwoImages } from "../components/sectionTwoImages";

export const PaymentExperiencePlatform = () => {
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
        " Deliver real-time, interactive notifications to customers, guiding them through remedial actions and enabling seamless transaction completion.",
      title: "Interactive Resilience:",
    },
    {
      id: 1,
      content:
        " Tailor your communication approach with personalized notifications, ensuring a consistent and engaging customer experience across all channels.",
      title: "Personalized Engagement:",
    },
    {
      id: 3,
      content:
        " Gain valuable insights into the root causes of transaction failures, empowering you to identify and address systemic issues proactively.",
      title: "Detailed Error Insights:",
    },
    {
      id: 2,
      content:
        " Ensure a consistent experience across all channels, including card-based transactions, mobile banking, internet banking, USSD, and more.",
      title: "Omnichannel Coverage:",
    },
  ];

  return (
    <>
      {/* section 1 */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="  px-3 md:px-16 lg:px-28">
          <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
            Transforming Transaction{" "}
            <span className=" relative inline-block">
              Failures
              <GreenUnderline />
            </span>{" "}
            into Strategic Opportunities
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
          <HeroImage altText={"hero"} heroImg={img1} />
        </div>
      </AnimatedContent>

      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <p className=" md:text-2xl">
            Failed payments can disrupt operations and erode customer
            satisfaction. However, these seemingly negative experiences can be
            transformed into strategic opportunities with the right approach.
            Introducing our cutting-edge Payment Experience Platform, designed
            to unlock the potential of transaction failures and turn them into
            valuable touchpoints for enhancing customer engagement and loyalty.
          </p>
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            EngageNotify360: Redefining the Payment Experience
          </h1>
          <div>
            <p className=" md:text-2xl">
              EngageNotify360 seamlessly integrates with your existing payment
              systems, providing a comprehensive suite of features to address
              transaction failures proactively and strategically:
            </p>
            <ul className=" list-decimal pl-16 mt-4 md:text-2xl grid gap-y-4">
              {section3data.map(({ id, content, title }) => (
                <li key={id}>
                  <span className=" font-medium">{title}</span> {content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section 4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className="  px-3 md:px-16 lg:px-28 mb-16">
          <SectionTwoImages img1={img2} altText={"dashboard"} />
        </section>
      </AnimatedContent>

      {/* section 5 */}
      <AnimatedContent isVisible={isVisibleSection5}>
        <section ref={section5Ref} className="   px-3 md:px-16 lg:px-28 mb-16">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Turning Challenges into Opportunities
          </h1>
          <div className=" grid gap-y-4 md:text-2xl ">
            <p>
              By embracing EngageNotify360, you can transform transaction
              failures from frustrating experiences into strategic opportunities
              for building stronger customer relationships and driving long-term
              business success. Engage with your customers proactively, resolve
              issues seamlessly, and foster a culture of transparency and trust
              – all while enhancing operational efficiency and minimizing the
              impact of failed transactions.
            </p>
            <p>
              Unlock the full potential of your payment ecosystem and elevate
              the customer experience to new heights.
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
