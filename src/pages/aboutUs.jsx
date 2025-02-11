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

  const infraData = [
    {
      title: "Issuing Infrastructure",
      name: "CardInfra™",
      description:
        "CardInfra™ is the ultimate solution for seamless digital and physical card issuance:",
      points: [
        "Real-time processing for instant card issuance",
        "Advanced fraud detection and risk management",
        "API-first architecture for easy integration",
        "Full program management for your card ecosystem",
      ],
    },
    {
      title: "Acquiring Infrastructure",
      name: "TerminalInfra™",
      description:
        "TerminalInfra™ is the ultimate solution for acquirers, offering:",
      points: [
        "Comprehensive POS, ATM, and Web acquiring capabilities",
        "Advanced transaction monitoring systems for real-time oversight",
        "Seamless integration with merchant and banking networks",
        "Scalable systems to support diverse acquiring needs",
      ],
    },
    {
      title: "Digital Banking Infrastructure",
      description:
        "Build modern, scalable digital banking platforms for every device:",
      points: [
        "Comprehensive digital banking solutions for retail and business customers",
        "Scalable cloud-based systems for rapid growth",
        "Multichannel banking experiences across mobile, web, and more",
        "Flexible APIs for custom integrations",
      ],
    },
    {
      title: "Bespoke Systems",
      description:
        "Automate banking and payment workflows with tailored systems designed for your unique operational needs:",
      points: [
        "Custom-built solutions to address specific challenges",
        "Enhanced efficiency with intelligent automation tools",
        "Modular design to adapt to evolving requirements",
        "Seamless integration with existing infrastructure",
      ],
    },
  ];

  return (
    <>
      <AnimatedContent isVisible={isVisibleSection1}>
        <section ref={section1Ref} className="px-3   md:px-16 lg:px-28">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold z-10 relative  mb-8 w-fit ">
            About Us
            <GreenUnderline />
          </h1>
          <div className=" flex flex-col gap-y-4">
            <p>
              At CoreInfra, we are building the Core Infrastructure that powers
              modern finance. From card management to payment processing,
              CoreInfra delivers the essential systems that keep financial
              services running. <br /> Think of us as the engine room of financial
              services—providing the critical infrastructure that powers
              everything else.
            </p>
            <h1 className=" text-xl md:text-3xl lg:text-[40px] font-bold ">
              Comprehensive Solutions Across <br /> Fintech Verticals
            </h1>
            <p>
              CoreInfra provides an extensive suite of infrastructure solutions
              to power banking and payments. Whether it’s issuing, acquiring,
              digital banking, or bespoke systems, our solutions are designed to
              automate and streamline financial operations:
            </p>
            <div className="pl-4 space-y-6">
              {infraData.map((infra, index) => (
                <div key={index}>
                  <h2 className="text-lg font-bold mb-2">{infra.title}</h2>
                  <p className=" mb-2">{infra.description}</p>
                  <ul className="list-disc list-inside ">
                    {infra.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};
