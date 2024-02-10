import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { DummyImg } from "./bespokePayment";

export const FintechInaBox = () => {
  return (
    <>
      <section className=" text-black  px-3 md:px-16 lg:px-24">
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
      {/* black and white boxes */}
      <BlackWhiteImgComp />
      {/* section 2 */}
      <section className=" text-black  px-3 md:px-16 lg:px-24 mb-16">
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
          issuing <br /> collaborations. <br /> <br /> Pavilion FIP is an on-premise
          solution, deployed within the bank's infrastructure and entirely
          <br /> overseen by the bank itself
        </p>
        <GlobalCTAButton text={"Get started"} style={" bg-ctaGreen  mt-6"} />
      </section>
      {/* section 3 */}
      <section className=" text-black  px-3 md:px-16 lg:px-24">
        <DummyImg />
      </section>
    </>
  );
};
