import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/fintechImg1.png";
import { HeroImage } from "../components/heroImage";

export const FintechInaBox = () => {
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
      <AnimatedContent isVisible={isVisibleSection1}>
        <section
          ref={section1Ref}
          className=" text-black  px-3 md:px-16 lg:px-24"
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
            <GlobalCTAButton text={"Explore More"} style={" bg-gray-200   "} />
            <GlobalCTAButton text={"Get in touch"} style={" bg-ctaGreen   "} />
          </div>
        </section>
      </AnimatedContent>
      {/* black and white boxes */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
        <HeroImage heroImg={img1} altText={"hero"} />
        </div>
      </AnimatedContent>
      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section
          ref={section2Ref}
          className=" text-black  px-3 md:px-16 lg:px-24 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Fintech In A Box
          </h1>
          <p>
            Our Fintech Issuing Processor(FIP) platform is a comprehensive
            solution that equips you with the <br /> essentials to collaborate
            with Fintechs and other secondary Issuers in a co-issuing
            arrangements. From seamless onboarding, to card request and issuance
            management to seamless authorization <br /> integrations to the
            Fintechs via secured open APIs, FIP is your gateway to seamless
            issuing <br /> collaborations. <br /> <br /> Pavilion FIP is an
            on-premise solution, deployed within the bank's infrastructure and
            entirely
            <br /> overseen by the bank itself
          </p>
          <GlobalCTAButton text={"Get started"} style={" bg-ctaGreen  mt-6"} />
        </section>
      </AnimatedContent>
      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section
          ref={section3Ref}
          className=" text-black  px-3 md:px-16 lg:px-24"
        >
          <DummyImg />
        </section>
      </AnimatedContent>
    </>
  );
};
