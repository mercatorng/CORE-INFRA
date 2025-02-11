import { useRef } from "react";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import AnimatedContent from "../animatedContent";
import issuingImg from "../../assets/homePage/issuingImg.svg";
import acquiringImg from "../../assets/homePage/acquiring-channels.svg";
import digitalBankingImg from "../../assets/homePage/animated-banking-infra.svg";
import bespokeSystemsImg from "../../assets/homePage/bespoke-systems.jpg";
import { Link } from "react-router-dom";

export const ComprehensiveSolution = () => {
  const headerContentRef = useRef(null);
  const { isVisible: headerContentContainer } =
    useScrollVisibility(headerContentRef);

  const issuingRef = useRef(null);
  const { isVisible: issuingContainer } = useScrollVisibility(issuingRef);

  const acquiringRef = useRef(null);
  const { isVisible: acquiringContainer } = useScrollVisibility(acquiringRef);

  const digitalBankingRef = useRef(null);
  const { isVisible: digitalBankingContainer } =
    useScrollVisibility(digitalBankingRef);

  const bespokeRef = useRef(null);
  const { isVisible: bespokeContainer } = useScrollVisibility(bespokeRef);

  const solutionData = [
    {
      header: "Issuing Infrastructure",
      detail:
        "CardInfra™ is the ultimate solution for seamless digital and physical card issuance:",
      points: [
        "Real-time processing for instant card issuance",
        "Advanced fraud detection and risk management",
        "API-first architecture for easy integration",
        "Full program management for your card ecosystem",
      ],
      image: issuingImg,
      refTitle: issuingRef,
      containerTitle: issuingContainer,
    },
    {
      header: "Acquiring Infrastructure",
      detail:
        "TerminalInfra™ is the ultimate solution for acquirers, offering:",
      points: [
        "Comprehensive POS, ATM, and Web acquiring capabilities",
        "Advanced transaction monitoring systems for real-time oversight",
        "Seamless integration with merchant and banking networks",
        "Scalable systems to support diverse acquiring needs",
      ],
      image: acquiringImg,
      refTitle: acquiringRef,
      containerTitle: acquiringContainer,
    },
    {
      header: "Digital Banking Infrastructure",
      detail:
        "Build modern, scalable digital banking platforms for every device:",
      points: [
        "Comprehensive digital banking solutions for retail and business customers",
        "Scalable cloud-based systems for rapid growth",
        "Multichannel banking experiences across mobile, web, and more",
        "Flexible APIs for custom integrations",
      ],
      image: digitalBankingImg,
      refTitle: digitalBankingRef,
      containerTitle: digitalBankingContainer,
    },
    {
      header: "Bespoke Systems",
      detail:
        "Automate banking and payment workflows with tailored systems designed for your unique operational needs:",
      points: [
        " Custom-built solutions to address specific challenges",
        "Enhanced efficiency with intelligent automation tools",
        "Modular design to adapt to evolving requirements",
        "Seamless integration with existing infrastructure",
      ],
      image: bespokeSystemsImg,
      refTitle: bespokeRef,
      containerTitle: bespokeContainer,
    },
  ];

  return (
    <section className=" my-24 px-8 md:px-16 lg:px-32 text-[#020202]">
      <AnimatedContent isVisible={headerContentContainer}>
        <div ref={headerContentRef} className=" mb-12 ">
          <h1 className=" text-xl md:text-3xl lg:text-[40px] font-bold mb-6">
            Comprehensive Solutions Across <br /> Fintech Verticals
          </h1>
          <p className="  md:text-lg ">
            CoreInfra provides an extensive suite of infrastructure solutions to
            power banking and <br /> payments. Whether it’s issuing, acquiring,
            digital banking, or bespoke systems, our <br /> solutions are
            designed to automate and streamline financial operations
          </p>
          {/* get started */}
          <Link
            to={"/contact-us"}
            className=" font-semibold inline-block mt-4 bg-[#020202]
            rounded-[4px] text-white px-4 py-1 w-fit"
          >
            Get started
          </Link>
        </div>
      </AnimatedContent>
      {/* solution */}
      <div className=" flex flex-col gap-y-20">
        {solutionData.map(
          (
            { containerTitle, detail, header, points, refTitle, image },
            index
          ) => (
            <AnimatedContent key={index} isVisible={containerTitle}>
              <article
                ref={refTitle}
                className=" md:flex md:gap-x-8 justify-between items-center"
              >
                {/* content */}
                <div
                  className={`md:w-[45%]  ${
                    [1, 3].includes(index) ? " md:order-1" : null
                  } `}
                >
                  <h1 className=" text-xl lg:text-2xl font-bold mb-4">
                    {header}
                  </h1>
                  <div className=" lg:text-lg">
                    <p className=" mb-4">{detail}</p>
                    <ul className="list-disc pl-6">
                      {points.map((point, pointIndex) => (
                        <li key={pointIndex} className="mb-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={"/contact-us"}
                    className=" w-fit font-instrument bg-[#F9FAFB] text-[#1A1A1A] text-[13px] border border-[#020202] rounded-xl px-5 py-[14px] font-medium cursor-pointer grid place-items-center"
                  >
                    Learn more
                  </Link>
                </div>
                {/* image */}
                <div className=" md:w-[60%]  mt-4 md:m-0 ">
                  <img
                    src={image}
                    alt={detail}
                    className=" w-full h-full object-cover"
                  />
                </div>
              </article>
            </AnimatedContent>
          )
        )}
      </div>
    </section>
  );
};
