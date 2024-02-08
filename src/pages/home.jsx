import React from "react";
import greenUnderline from "../assets/greenUnderline.svg";
import { GlobalCTAButton } from "../components/button";
import heroImg1 from "../assets/heroImg1.png";
import companyLogo1 from "../assets/featherdev.png";
import companyLogo2 from "../assets/neizte.png";
import companyLogo3 from "../assets/globalbank.png";
import companyLogo4 from "../assets/spherule.png";
import companyLogo5 from "../assets/lightBox.png";
import companyLogo6 from "../assets/boltShift.png";
import weOfferIconImg from "../assets/we-offer-icon.svg";
import txnMattersImg from "../assets/txn-matters-icon.svg";
import macbookImg from "../assets/Macbook-Pro-16-mockup.png";
import innovationIcon from "../assets/innovation-icon.svg";
import partnershipIcon from "../assets/partnership-icon.svg";
import cuttingEdgeIcon from "../assets/cutting-edge-icon.svg";
import expertiseIcon from "../assets/expertise-icon.svg";

export const Home = () => {
  const section2Data = [
    {
      icon: weOfferIconImg,
      headerText: "Every Transaction Matters",
      text: "Transform every transaction into a meaningful engagement, even those that falter. Our solution redefines the story of failed transactions, leaving a positive and enduring impression on your customers",
    },
    {
      icon: txnMattersImg,
      headerText: "What We Offer",
      subText1: "Innovation Leadership",
      subText2: "Profound Expertise",
      subText3: "Cutting-Edge Solutions",
      subText4: "Strategic Partnerships",
    },
  ];

  const whyChooseCoreInfraData = [
    {
      icon: innovationIcon,
      headerText: "Innovation Leadership",
      text: "We lead the way in innovation, constantly pushing boundaries to provide you with pioneering solutions that keep you at the forefront of your industry",
    },
    {
      icon: expertiseIcon,
      headerText: "Profound Expertise",
      text: "Benefit from our deep domain knowledge and extensive technological expertise. Our team is equipped with the skills to navigate complex challenges and deliver tailored solutions.",
    },
    {
      icon: cuttingEdgeIcon,
      headerText: "Cutting-Edge Solutions",
      text: "Stay ahead of the competition with our cutting-edge and differentiated solutions. We prioritize staying abreast of the latest technologies to ensure your business remains at the pinnacle of success",
    },
    {
      icon: partnershipIcon,
      headerText: "Strategic Partnerships",
      text: "Partnering with CoreInfra means aligning with a strategic ally. We are committed to being more than just a solution provider; we are your long-term partner in achieving and surpassing your business goals",
    },
  ];

  return (
    <>
      <section className=" px-3 md:px-16">
        <div className=" mb-8">
          <h1 className=" text-3xl relative z-20 font-medium mb-4 md:text-5xl lg:text-7xl  w-fit">
            Transforming transactions, <br /> Elevating possibilities
            <img
              src={greenUnderline}
              alt="green underline"
              className=" absolute right-12 -bottom-1 w-[50%] -z-10 md:right-[4.5rem] md:-bottom-2 lg:right-[7rem]"
            />
          </h1>
          <p className=" md:text-2xl">
            We are enabling a world where seamless transactions meet limitless
            possibilities, shaping a future of unparalleled convenience and
            empowerment.
          </p>
        </div>
        {/* buttons */}
        <div className=" flex gap-x-4 mb-8">
          <GlobalCTAButton
            text={"Explore more"}
            style={" bg-white text-black "}
          />
          <GlobalCTAButton
            text={"Get in touch"}
            style={" bg-ctaGreen text-black "}
          />
        </div>
        {/* hero image */}
        <div className=" mb-12">
          <img
            src={heroImg1}
            alt="hero"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col text-center md:text-xl mb-8">
          <p className=" mb-4">Trusted Partnership</p>
          <p>A trusted partner you can rely on</p>
          <div className=" mt-8 grid grid-cols-[auto,auto] md:grid-cols-3 md:place-items-center lg:grid-cols-6 gap-4 justify-between h-fit relative">
            <p className=" absolute h-full w-full bg-black bg-opacity-70"></p>
            <img src={companyLogo1} alt="company" />
            <img src={companyLogo2} alt="company" />
            <img src={companyLogo3} alt="company" />
            <img src={companyLogo4} alt="company" />
            <img src={companyLogo5} alt="company" />
            <img src={companyLogo6} alt="company" />
          </div>
        </div>
      </section>
      {/* section 2 white */}
      <section className=" bg-white pt-12 text-black">
        <div className=" text-center px-4 md:px-16">
          <h1 className=" text-2xl md:text-5xl font-bold mb-4">
            Modern Payment Infrastructure
          </h1>
          <p className=" font-medium  md:text-2xl ">
            CoreInfra helps financial institutions to modernize their core
            payment infrastructure. With years of experience and passion for
            innovation, we have delivered many industry first solutions that
            drive growth and increase efficiency
          </p>
        </div>
        {/* content and  macbook */}
        <div className=" flex flex-col lg:flex-row gap-8  py-8 md:py-16">
          <div className=" lg:pr-8 flex flex-col gap-y-8 lg:w-[50%]">
            {section2Data.map(
              ({
                icon,
                text,
                headerText,
                subText1,
                subText2,
                subText3,
                subText4,
              }) => {
                return (
                  <div className="pl-3 md:px-16 lg:pr-0">
                    <img src={icon} alt="message icon" className=" mb-4" />
                    <h2 className=" font-bold text-lg md:text-2xl">
                      {headerText}
                    </h2>
                    {text && <p className="  md:text-2xl ">{text}</p>}
                    {subText1 && (
                      <ul className=" list-disc list-inside  md:text-2xl ">
                        <li>{subText1}</li>
                        <li>{subText2}</li>
                        <li>{subText3}</li>
                        <li>{subText4}</li>
                      </ul>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className=" bg-gray-200 rounded-l-3xl py-8 md:grid md:place-items-center ml-3 md:ml-16 lg:ml-0">
            <img src={macbookImg} alt="mackbook" />
          </div>
        </div>
      </section>
      {/*section 3 why choose core infra */}
      <section className=" dot-grid-bg relative px-3 md:px-16 pt-16 ">
        {/* content */}
        <div className=" mb-8">
          <h1 className=" text-2xl md:text-5xl font-bold mb-4">
            Why Choose CoreInfra ?
          </h1>
          <p className="  md:text-2xl">
            At CoreInfra, we transcend conventional offerings, forging pathways
            to innovation, reliability, and success. Leveraging our profound
            domain knowledge and technological expertise. We deliver
            cutting-edge and distinctive solutions crafted to propel your
            business into the forefront of the finance and technology landscape,
            ensuring you stay ahead of the competition
          </p>
          <p className=" font-bold md:text-xl mt-4 mb-3">
            Ready to enhance your payment infrastructure?
          </p>
          <GlobalCTAButton
            text={"Get started"}
            style={" bg-ctaGreen text-black"}
          />
        </div>
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseCoreInfraData.map(({ headerText, text, icon }, index) => {
            return (
              <div
                className={` p-4 grid gap-2 rounded-3xl text-[#2F405E] ${
                  index === 1 || index === 2 ? " bg-[#F8F8F8] " : "bg-[#F9F3ED]"
                }`}
              >
                <img src={icon} alt={headerText} className=" h-[24px] w-[24px]" />
                <h2 className=" font-bold text-lg md:text-2xl">{headerText}</h2>
                <p className=" font-semibold md:text-lg">{text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
