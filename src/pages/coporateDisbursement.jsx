import { GreenUnderline } from "../components/greenUnderline";
import { GlobalCTAButton } from "../components/button";
import { BlackWhiteImgComp } from "../components/blackWhiteImg";
import { DummyImg } from "./bespokePayment";

export const CoporateDisbursement = () => {
  return (
    <>
      {/* section 1 */}

      <section className=" text-black  px-3 md:px-16 lg:px-24">
        <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
          Optimize disbursements with our{" "}
          <span className=" relative inline-block">
            automated
            <GreenUnderline />
          </span>{" "}
          platform
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
          Corporate Disbursement
          <br />
          Platform
        </h1>
        <p>
          Discover efficiency in managing financial transactions with our
          Corporate <br /> Disbursement Platform. Designed with automated
          payment workflows, this <br /> platform streamlines your disbursement
          processes, offering a transformative <br /> solution for corporate
          financial operations
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
