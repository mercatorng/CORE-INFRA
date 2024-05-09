import { GreenUnderline } from "../components/greenUnderline";
import {
  LetsTalkButton,
  OpenAboutPageButton,
  RequestDemoButton,
} from "../components/button";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import img1 from "../assets/prepaidHero.svg";
import { HeroImage } from "../components/heroImage";

export const PrepaidCardManagementSystem = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const heroImgRef = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(
    section1Ref,
    true
  );

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const { isVisible: isVisibleSection4 } = useScrollVisibility(section4Ref);

  const { isVisible: isVisibleHeroImg } = useScrollVisibility(heroImgRef);

  const section2data = [
    {
      id: 1,
      content:
        "  Robust backend systems for seamless balance management, transaction processing, and real-time reporting",
      title: "Prepaid Card Backend:",
    },
    {
      id: 0,
      content:
        "  A user-friendly portal for corporate partners and merchants to manage prepaid card programs, track performance, and gain valuable insights.",
      title: "Merchant Portal:",
    },
    {
      id: 2,
      content:
        "  A feature-rich mobile app that empowers cardholders to monitor balances, view transaction history, and manage their prepaid cards on-the-go.",
      title: "Customer App:",
    },
  ];

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="  px-3 md:px-16 lg:px-28 ">
          <div>
            <h1 className=" text-3xl relative z-20 font-bold mb-8 md:text-5xl lg:text-7xl  w-fit ">
              Innovative{" "}
              <span className=" relative inline-block">
                Prepaid
                <GreenUnderline />
              </span>{" "}
              {""}
              Card Solutions for Banks
            </h1>
            {/* buttons */}
            <div className=" flex flex-wrap gap-4">
              <RequestDemoButton
                text={"Request a Demo"}
                style={" bg-ctaGreen  mt-6"}
              />
            </div>
          </div>
        </section>
      </AnimatedContent>
      {/* hero */}
      <AnimatedContent isVisible={isVisibleHeroImg}>
        <div ref={heroImgRef}>
          <HeroImage altText={"prepaid card hero"} heroImg={img1} />
        </div>
      </AnimatedContent>

      {/* section 2 */}
      <AnimatedContent isVisible={isVisibleSection2}>
        <section ref={section2Ref} className="  px-3 md:px-16 lg:px-28  mb-16">
          <div>
            <p className=" md:text-2xl">
              Introducing our cutting-edge prepaid card management system,
              designed to empower banks with the flexibility and control they
              need to stay ahead in the rapidly evolving prepaid card landscape.
            </p>
            <p className=" md:text-2xl my-8">
              Modular Architecture, Comprehensive Functionality. Our system is
              built on a modular architecture, providing a comprehensive suite
              of features to streamline prepaid card operations:
            </p>
            <ul className=" list-decimal grid gap-y-4 md:text-2xl pl-8 md:pl-12">
              {section2data.map(({ id, content, title }) => (
                <li key={id}>
                  <span className=" font-medium">{title}</span> {content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedContent>

      {/* section 3 */}
      <AnimatedContent isVisible={isVisibleSection3}>
        <section ref={section3Ref} className="   px-3 md:px-16 lg:px-28 ">
          <div className=" mb-16">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
              Tailored to Your Needs, Future-Proof Solutions
            </h1>
            <p className=" md:text-2xl">
              Our prepaid card management system is designed to adapt to your
              bank's unique requirements and emerging use cases. Whether you're
              launching innovative prepaid card programs for payroll, corporate
              expenses, loyalty rewards, or any other application, our system
              provides the flexibility and scalability to support your evolving
              needs.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* section 4 */}
      <AnimatedContent isVisible={isVisibleSection4}>
        <section ref={section4Ref} className=" px-3 md:px-16 lg:px-28">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl mb-4">
              Driving Innovation, Unlocking Growth Opportunities
            </h1>
            <p className=" md:text-2xl mb-3">
              Empower your bank to stay ahead of the curve with innovative
              prepaid card solutions that cater to the ever-changing demands of
              your customers. Our system enables you to launch new products
              quickly, test and iterate on new ideas, and continuously enhance
              your prepaid card offerings, ultimately driving growth and
              customer satisfaction.
            </p>
            <p className=" mt-8 md:text-2xl">
              Partner with us today and unlock the full potential of prepaid
              card solutions tailored to your bank's unique requirements and
              market dynamics.
            </p>
            <RequestDemoButton
              text={"Request a Demo"}
              style={" bg-ctaGreen  mt-6"}
            />
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};
