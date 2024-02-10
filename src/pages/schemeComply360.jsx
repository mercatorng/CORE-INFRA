import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { DummyImg } from "./bespokePayment";

export const SchemeComply360 = () => {
  return (
    <>
      {/* section 1 */}
      <section className=" text-black  px-3 md:px-16 lg:px-24">
        <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
          Simplify Compliance Reporting with
          <br />
          <span className=" relative inline-block">
            Automation
            <GreenUnderline />
          </span>{" "}
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
          SchemeComply360
        </h1>
        <p>
          SchemeComply360 simplifies compliance reporting by automating the{" "}
          <br /> process of generating and submitting Mastercard GCO reports and
          other <br /> scheme specific reports
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
