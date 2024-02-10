import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { DummyImg } from "./bespokePayment";

export const EngageNotify360 = () => {
  return (
    <>
      {/* section 1 */}
      <section className=" text-black  px-3 md:px-16 lg:px-24">
        <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
          Transforming Transaction <br />
          <span className=" relative inline-block">
            Setbacks
            <GreenUnderline />
          </span>{" "}
          into Opportunities
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
          EngageNotify360
        </h1>
        <p>
          EngageNotify360 is our solution that turns transaction setbacks into
          strategic <br /> advantages. This error handling solution transforms
          failed transactions into <br /> personalized customer engagements,
          ensuring a positive experience even in <br /> challenging moments
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
