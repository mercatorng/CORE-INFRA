import { OpenAboutPageButton, RequestDemoButton } from "./button";
import coreInfraBlack from "../assets/coreInfraLogoBlack.svg";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";
import { useScrollVisibility } from "../hooks/useScrollHook";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../utils/context";

export const Footer = () => {
  const navLinks = [
    { linkName: "CoreInfra", linkUrl: "/" },
    { linkName: "About Us", linkUrl: "/about" },
    { linkName: "Contact Us", linkUrl: "#" },
  ];

  const legalData = [
    { linkName: "Terms", linkUrl: "#" },
    { linkName: "Privacy", linkUrl: "#" },
    { linkName: "Licenses", linkUrl: "#" },
  ];

  const section1Ref = useRef();
  const section2Ref = useRef();

  const { isVisible: isVisibleSection1 } = useScrollVisibility(section1Ref);

  const { isVisible: isVisibleSection2 } = useScrollVisibility(section2Ref);

  const currentYear = new Date().getFullYear();

  // hide footer on contact us page
  const location = useLocation();
  const urlPath = location.pathname;

  const aboutPath = "/about";
  const checkAboutPath = urlPath === aboutPath;

  const { checkContactUsPath } = useGlobalContext();

  return (
    <>
      {!checkContactUsPath && (
        <footer className=" bg-white text-gray-900 pt-16">
          {/* lets talk */}
          <AnimatedContent isVisible={isVisibleSection1}>
            <div
              ref={section1Ref}
              className=" mx-3 md:mx-16 lg:mx-24 flex flex-col md:flex-row gap-4 md:justify-between bg-black rounded-2xl text-gray-50 p-3 md:p-6 mb-16"
            >
              <div>
                <h1 className=" font-semibold text-lg md:text-4xl">
                  Lets Talk!
                </h1>
                <p className=" md:text-xl">
                  Unlock growth and reduce costs. <br /> Schedule a demo of
                  CoreInfra's payment solutions today.
                </p>
              </div>
              {/* learn more */}
              <div className=" flex gap-x-4 items-center shrink-0">
                {!checkAboutPath && (
                  <OpenAboutPageButton
                    text={"Learn More"}
                    style={" bg-white text-gray-900"}
                  />
                )}
                <RequestDemoButton
                  text={"Request a Demo"}
                  style={" bg-ctaGreen text-black"}
                />
              </div>
            </div>
          </AnimatedContent>
          {/* footer content */}
          <div className=" pb-4  bg-[#FDFDFD] pt-8 px-3 md:px-16 lg:px-28 text-sm md:text-base">
            <AnimatedContent isVisible={isVisibleSection2}>
              <div
                ref={section2Ref}
                className=" lg:flex lg:justify-between gap-x-4 lg:items-center"
              >
                {/* logo */}
                <div className=" lg:mb-auto">
                  <img src={coreInfraBlack} alt="logo" />
                  <p>Igniting Innovation in Payments</p>
                </div>
                {/* nav link */}
                <div className=" lg:w-[70%] mt-8  md:flex md:justify-between ">
                  <div className=" flex flex-col w-fit gap-1 shrink-0">
                    <p className=" font-bold">Company</p>
                    {navLinks.map(({ linkName, linkUrl }) => (
                      <Link
                        key={linkName}
                        className=" hover:text-ctaGreen globalTransition"
                        to={linkUrl}
                      >
                        {linkName}
                      </Link>
                    ))}
                  </div>
                  {/* legal */}
                  <div className=" mt-4 md:mt-0">
                    <div className=" flex flex-col w-fit gap-1 ">
                      <p className=" font-bold">Legal</p>
                      {legalData.map(({ linkName, linkUrl }) => (
                        <Link
                          key={linkName}
                          className=" hover:text-ctaGreen globalTransition "
                          to={linkUrl}
                        >
                          {linkName}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* address */}
                  <div className="flex flex-col w-fit gap-1 mt-6 md:mt-0">
                    <p>CoreInfra Solutions Ltd</p>
                    <p>1A Hughes Ave, Yaba 101245, Lagos</p>
                    <a
                      href="mailto:connect@coreinfrahq.com"
                      className=" hover:text-ctaGreen inline-block w-fit"
                    >
                      connect@coreinfrahq.com
                    </a>
                    <p>+234 903 618 9485</p>
                  </div>
                </div>
              </div>
              {/* copyright */}
              <div className=" border-t border-gray-200 my-4"></div>
              <div className=" md:flex md:justify-between items-center">
                <p>© {currentYear} CoreInfra™. All rights reserved. </p>
                {/* social icons */}
                <div>
                  <SocialIcon
                    url="https://x.com/CoreInfraHQ"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/company/coreinfrahq"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                  <SocialIcon
                    url="https://facebook.com/coreinfrahq.com"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                  <SocialIcon
                    url="https://instagram.com/coreinfrahq"
                    target="_blank"
                    bgColor="transparent"
                    fgColor="gray"
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
        </footer>
      )}
    </>
  );
};
