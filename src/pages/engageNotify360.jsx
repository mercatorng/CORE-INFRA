import { GreenUnderline } from "../components/greenUnderline";
import { LetsTalkButton, OpenAboutPageButton, RequestDemoButton } from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { HeroImage } from "../components/heroImage";
import img1 from "../assets/engageNotifyImg1.jpg";
import img2 from "../assets/engageNotifyImg2.png";
import { SectionTwoImages } from "../components/sectionTwoImages";

export const EngageNotify360 = () => {
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
            Unlocking{" "}
            <span className=" relative inline-block">
              Strategic
              <GreenUnderline />
            </span>{" "}
            Opportunities in Transaction Failures.
          </h1>
          {/* buttons */}
          <div className=" flex flex-wrap gap-4">
            <OpenAboutPageButton text={"Explore More"} style={" bg-gray-200   "} />
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
            EngageNotify360
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              Unlocking Strategic Opportunities in Transaction Failures. Failed
              transactions are a pervasive challenge that disrupt the seamless
              flow of operations and pose a threat to customer satisfaction.
            </p>
            <p className=" md:text-2xl">
              We are excited to present EngageNotify360, a transaction based
              customer engagement platform designed to turn failed transactions
              into opportunities for positive interactions and increased
              customer satisfaction. In today's competitive landscape, ensuring
              a seamless user experience is critical, and EngageNotify360
              empowers you to address failed transactions strategically, turning
              them into valuable touchpoints with your customers.
            </p>
            <p className=" md:text-2xl">
              EngageNotify360 integrates into existing payment systems and
              provides interactive resilience, personalized notifications,
              detailed error insights, and remedial actions for customers facing
              transaction errors on any of the banks channels – from card based
              transactions to account based transactions on channels such as
              Mobile Banking, Internet Banking, USSD, etc.
            </p>
            <p className=" md:text-2xl">
              EngageNotify360 is a transformative solution that goes beyond
              simply managing failed transactions. It allows you to turn them
              into positive customer interactions, building stronger
              relationships and driving long-term business success.
            </p>
          </div>
          <RequestDemoButton
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
          <SectionTwoImages img1={img2} altText={"dashboard"} />
        </section>
      </AnimatedContent>
    </>
  );
};
