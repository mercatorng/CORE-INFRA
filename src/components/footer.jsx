import { GlobalCTAButton } from "./button";
import coreInfraBlack from "../assets/coreInfraLogoBlack.svg";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";

export const Footer = () => {
  const navLinks = [
    { linkName: "CoreInfra", linkUrl: "/" },
    { linkName: "About Us", linkUrl: "#" },
    { linkName: "Overview", linkUrl: "#" },
  ];

  const solutionsData = [
    { linkName: "Bespoke Payment Software", linkUrl: "#" },
    { linkName: "Infrastructure Solutions", linkUrl: "#" },
    { linkName: "Corporate Disbursement Platform", linkUrl: "#" },
    { linkName: "Card and PIN Management Solutions", linkUrl: "#" },
    { linkName: "EngageNotify360", linkUrl: "#" },
    { linkName: "SchemeComply360", linkUrl: "#" },
    { linkName: "Fintech in a Box", linkUrl: "#" },
  ];
  const resourcesData = [
    { linkName: "Blog", linkUrl: "#" },
    { linkName: "Help Center", linkUrl: "#" },
    { linkName: "Support", linkUrl: "#" },
  ];

  const legalData = [
    { linkName: "Legal", linkUrl: "#" },
    { linkName: "Terms", linkUrl: "#" },
    { linkName: "Privacy", linkUrl: "#" },
    { linkName: "Licenses", linkUrl: "#" },
    { linkName: "Contact Us", linkUrl: "#" },
  ];

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(section1Ref);

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const { isVisible: isVisibleSection3 } = useScrollVisibility(section3Ref);

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white text-gray-900 pt-16">
      {/* lets talk */}
      <AnimatedContent isVisible={isVisibleSection1}>
        <div
          ref={section1Ref}
          className=" mx-3 md:mx-16 lg:mx-24 flex flex-col md:flex-row gap-4 md:justify-between bg-black rounded-2xl text-gray-50 p-3 md:p-6 mb-16"
        >
          <div>
            <h1 className=" font-semibold text-lg md:text-4xl">Lets Talk!</h1>
            <p className=" md:text-xl">
              Every great partnership begins with a conversation
            </p>
          </div>
          {/* learn more */}
          <div className=" flex gap-x-4 items-center shrink-0">
            <GlobalCTAButton
              text={"Learn More"}
              style={" bg-white text-gray-900"}
            />
            <GlobalCTAButton
              text={"Get started"}
              style={" bg-ctaGreen text-black"}
            />
          </div>
        </div>
      </AnimatedContent>
      {/* footer content */}
      <div className=" pb-4 globalTransition bg-[#FDFDFD] pt-8 px-3 md:px-16 lg:px-24 text-sm md:text-base">
        <AnimatedContent isVisible={isVisibleSection2}>
          <div
            ref={section2Ref}
            className=" lg:flex lg:justify-between gap-x-4 lg:items-center"
          >
            {/* logo */}
            <div className=" lg:mb-auto">
              <img src={coreInfraBlack} alt="logo" />
              <p className=" ">
                Transforming transactions, elevating possibilities
              </p>
            </div>
            {/* nav link */}
            <div className=" lg:w-[70%] mt-4  md:flex md:justify-between">
              <div className=" flex flex-col w-fit gap-1">
                {navLinks.map(({ linkName, linkUrl }) => (
                  <Link
                    key={linkName}
                    className=" hover:text-ctaGreen "
                    to={linkUrl}
                  >
                    {linkName}
                  </Link>
                ))}
              </div>
              {/* solutions */}
              <div className=" mt-4 md:mt-0 ">
                <p className=" font-bold">Solutions</p>
                <div className=" flex flex-col w-fit gap-1 ">
                  {solutionsData.map(({ linkName, linkUrl }) => (
                    <Link
                      key={linkName}
                      className=" hover:text-ctaGreen "
                      to={linkUrl}
                    >
                      {linkName}
                    </Link>
                  ))}
                </div>
              </div>
              {/* resources */}
              <div className=" mt-4 md:mt-0 ">
                <p className=" font-bold">Resources</p>
                <div className=" flex flex-col w-fit gap-1 ">
                  {resourcesData.map(({ linkName, linkUrl }) => (
                    <Link
                      key={linkName}
                      className=" hover:text-ctaGreen "
                      to={linkUrl}
                    >
                      {linkName}
                    </Link>
                  ))}
                </div>
              </div>
              {/* legal */}
              <div className=" mt-4 md:mt-0 ">
                <div className=" flex flex-col w-fit gap-1 ">
                  {legalData.map(({ linkName, linkUrl }) => (
                    <Link
                      key={linkName}
                      className=" hover:text-ctaGreen "
                      to={linkUrl}
                    >
                      {linkName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className=" border-t border-gray-200 my-4"></div>
          <div className=" md:flex md:justify-between items-center">
            <p>© {currentYear} Coreinfra™. All rights reserved. </p>
            {/* social icons */}
            <div>
              <SocialIcon
                url="https://x.com"
                target="_blank"
                bgColor="transparent"
                fgColor="gray"
              />
              <SocialIcon
                url="https://linkedin.com"
                target="_blank"
                bgColor="transparent"
                fgColor="gray"
              />
              <SocialIcon
                url="https://facebook.com"
                target="_blank"
                bgColor="transparent"
                fgColor="gray"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </footer>
  );
};
