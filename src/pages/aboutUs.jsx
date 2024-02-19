import { GreenUnderline } from "../components/greenUnderline";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { useRef } from "react";

export const AboutUs = () => {
  const section1Ref = useRef();
  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  return (
    <AnimatedContent isVisible={isVisibleSection1}>
      <section ref={section1Ref} className="px-3 relative  md:px-16 lg:px-28">
        <h1 className=" font-bold text-3xl z-10 relative md:text-5xl lg:text-7xl mb-8 w-fit ">
          About Us
          <GreenUnderline />
        </h1>
        <div className=" flex flex-col gap-y-4">
          <p className=" md:text-2xl">
            At CoreInfra, we are building modern core payments infrastructure
            for Financial Institutions. We understand the challenges as well as
            the opportunities that exist in the ever-evolving Financial services
            sector.
          </p>
          <p className=" md:text-2xl">
            We leverage our deep domain and technology expertise to provide
            Financial institutions with cutting-edge and differentiated
            technology solutions to their esteemed customers.
          </p>
          <p className=" md:text-2xl">
            With years of experience and passion for innovation, we have
            delivered many industry-first solutions that drive growth and
            increased efficiency.
          </p>
        </div>
      </section>
    </AnimatedContent>
  );
};
