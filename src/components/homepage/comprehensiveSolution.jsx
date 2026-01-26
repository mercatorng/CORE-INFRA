import { useRef } from "react";
import { useScrollVisibility } from "../../hooks/useScrollHook";
import AnimatedContent from "../animatedContent";
import issuingImg from "../../assets/homePage/issuingImg.svg";
import acquiringImg from "../../assets/homePage/acquiring-channels.svg";
import digitalBankingImg from "../../assets/homePage/animated-banking-infra.svg";
import bespokeSystemsImg from "../../assets/homePage/bespoke-systems-UFoxgsya 1.png";
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
      header: "Issuing Infrastructure (CardInfra™)",
      detail:
        "Modular infrastructure for building and managing card programs across multiple product types and customer segments.",
      pointTitle: "Designed to support:",
        points: [
        "Card lifecycle and program management",
        "Secure customer enablement and credential services",
        "Specialized and value-added card use cases",
      ],
      image: issuingImg,
      refTitle: issuingRef,
      containerTitle: issuingContainer,
    },
    {
      header: "Acquiring Infrastructure (TerminalInfra™)",
      detail:
        "Infrastructure powering the acceptance side of payments for acquirers and merchant ecosystems.",
      pointTitle: "Designed to support:",
      points: [
        "Multi-channel payment acceptance",
        "Merchant and network integrations",
        "Transaction monitoring and operational controls",
      ],
      image: acquiringImg,
      refTitle: acquiringRef,
      containerTitle: acquiringContainer,
    },
    {
      header: "Digital Banking Infrastructure",
      detail:
        "Platforms that enable banks and fintechs to deliver secure, scalable digital banking experiences.",
      pointTitle: "Designed to support:",
      points: [
        "Retail, SME, and corporate banking use cases",
        "Agency and assisted banking models",
        "Lightweight channels such as USSD and QR",
      ],
      image: digitalBankingImg,
      refTitle: digitalBankingRef,
      containerTitle: digitalBankingContainer,
    },
    {
      header: "Bespoke Enterprise Systems",
      detail:
        "Custom-built financial infrastructure for institutions with unique operational or industry-specific requirements.",
      pointTitle: "Includes:",
        points: [
        "Middleware and orchestration layers",
        "Workflow automation and system integration",
      ],
      image: bespokeSystemsImg,
      refTitle: bespokeRef,
      containerTitle: bespokeContainer,
    },
  ];

  return (
    <section className=" my-24 px-8 md:px-16 lg:px-32 text-[#020202]">
      <div className="container mx-auto max-w-[1121px]">
      <AnimatedContent isVisible={headerContentContainer}>
        <div ref={headerContentRef} className="flex flex-col items-center mb-12">
          <h1 className=" text-xl md:text-3xl lg:text-[40px] font-bold mb-6 font-aileron">
            Our Core Infrastructure Platforms
          </h1>
          
        </div>
      </AnimatedContent>
      {/* solution */}
      <div className="flex flex-col gap-y-20">
        {solutionData.map(
          (
            { containerTitle, detail, header, points, pointTitle, refTitle, image },
            index
          ) => (
            <AnimatedContent key={index} isVisible={containerTitle}>
              <article
                ref={refTitle}
                className="items-center justify-between md:flex md:gap-x-8"
              >
                {/* content */}
                <div
                  className={`md:w-[45%]  ${
                    [1, 3].includes(index) ? " md:order-1" : null
                  } `}
                >
                  <h1 className="mb-4 text-xl font-bold lg:text-2xl">
                    {header}
                  </h1>
                  <div className=" lg:text-lg">
                    <p className="mb-4 ">{detail}</p>
                    <p className="mb-4">{pointTitle}</p>
                    <ul className="pl-6 list-disc">
                      {points.map((point, pointIndex) => (
                        <li key={pointIndex} className="mb-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={"/contact-us"}
                    className=" w-fit font-instrument mt-8 bg-black text-[#ffffff] text-[13px] border border-[#ffffff] rounded-xl px-5 py-[14px] font-medium cursor-pointer grid place-items-center hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  >
                    Learn more
                  </Link>
                </div>
                {/* image */}
                <div className=" md:w-[60%]  mt-4 md:m-0 ">
                  <img
                    src={image}
                    alt={detail}
                    className="object-cover w-full h-full "
                  />
                </div>
              </article>
            </AnimatedContent>
          )
        )}
      </div>
      </div>
    </section>
  );
};
