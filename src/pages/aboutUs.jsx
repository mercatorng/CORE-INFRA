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

  const section2Ref = useRef();
  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="px-3   md:px-16 lg:px-28">
          <h1 className=" font-bold text-3xl z-10 relative md:text-5xl lg:text-7xl mb-8 w-fit ">
            About Us
            <GreenUnderline />
          </h1>
          <div className=" flex flex-col gap-y-4">
            <p className=" md:text-2xl">
              At CoreInfra, we are building modern core payments infrastructure
              for Financial Institutions. We understand the challenges as well
              as the opportunities that exist in the ever-evolving Financial
              services sector.
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
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="px-3 mt-16  md:px-16 lg:px-28">
          <h2 className=" font-bold text-3xl md:text-4xl mb-3">
            Our Core Values ; CORE
          </h2>
          <div className=" flex flex-col gap-y-8 md:text-2xl">
            <p>
              <span className="font-bold">C</span>ollaboration: We believe in
              the power of collaboration, fostering strong partnerships
              internally and externally. Together, we achieve more, driving
              innovation and excellence in every transaction.
            </p>
            <p>
              <span className="font-bold">O</span>ptimism: Embracing optimism,
              we approach challenges as opportunities for growth. We believe in
              the potential of every transaction to bring positive change,
              inspiring confidence and creativity.
            </p>
            <p>
              <span className="font-bold">R</span>eliability: At the core of our
              values is reliability. We are committed to providing dependable
              solutions, ensuring that every transaction is secure, efficient,
              and trustworthy.
            </p>
            <p>
              <span className="font-bold">E</span>xcellence: We strive for
              excellence in everything we do. From crafting innovative solutions
              to delivering exceptional services, our commitment to excellence
              defines our approach to transforming transactions.
            </p>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};
