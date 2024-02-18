import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { DummyImg } from "./bespokePayment";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/fintechImg1.jpg";
import { HeroImage } from "../components/heroImage";
import { SectionTwoImages } from "../components/sectionTwoImages";
import img2 from "../assets/bespokeImg2.png";
import img3 from "../assets/bespokeImg3.png";

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
          className=" text-black  px-3 md:px-16 lg:px-28 mb-16"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
            Fintech In A Box
          </h1>
          <div className=" flex flex-col gap-y-8">
            <p className=" md:text-2xl">
              The financial technology (Fintech) industry has rapidly grown over
              the past decade, disrupting <br /> traditional banking models and
              creating new opportunities for financial institutions to innovate.{" "}
              <br />
              As Fintech continues to transform the financial industry, banks
              must position themselves as Fintech partners of choice to remain
              competitive and relevant. This requires a comprehensive
              understanding <br /> of the Fintech landscape, identification of
              potential partnerships, and integration of new <br />
              technologies and processes.
            </p>
            <p className=" md:text-2xl">
              Banks that successfully align themselves with Fintech can gain a
              competitive edge, improve their <br /> customer experience, and
              increase profitability. One area of collaboration that holds great
              potential <br /> is card issuing. Fintech companies are
              increasingly venturing into the card issuing space, offering{" "}
              <br /> innovative solutions such as virtual cards, physical cards
              with innovative and interesting use cases.
            </p>
            <p className=" md:text-2xl">
              We are proud to introduce Pavilion Fintech Issuing Processor(
              Pavilion FIP), a payments processing middleware that acts as a
              gateway between the bank and partner Fintechs. Pavilion FIP
              enables banks <br /> to issue cards to Fintech partners, process
              transactions from these cards, and offer additional <br />{" "}
              functionality such as fee sharing(Interchange Reimbursement Fee –
              IRF) and dispute resolution.{" "}
            </p>
            <p className=" md:text-2xl">
              Pavilion FIP is an on-premise solution, specifically implemented
              within the bank's infrastructure and <br /> entirely overseen by
              the bank itself.
            </p>
            <p className=" md:text-2xl">
              Pavilion FIP helps bridge the gap and unlocks the full potential
              of bank-fintech  collaboration, shaping <br /> a brighter future
              for the card issuing industry.
            </p>
          </div>
          <GlobalCTAButton
            text={"Request a Demo"}
            style={" bg-ctaGreen  mt-6"}
          />
        </section>
      </AnimatedContent>
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
