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
    { linkName: "About Us", linkUrl: "/about" },
    { linkName: "Overview", linkUrl: "/" },
    { linkName: "Contact Us", linkUrl: "/contact-us" },
  ];
  const solutionsData = [
    { linkName: "Issuing Infrastructure", linkUrl: "/issuing-infrastructure" },
    {
      linkName: "Acquiring Infrastructure",
      linkUrl: "/acquiring-infrastructure",
    },
    {
      linkName: "Digital Banking Infrastructure",
      linkUrl: "/digital-banking-infrastructure",
    },
    { linkName: "Bespoke Systems", linkUrl: "/bespoke-systems" },
  ];
  const resourcesData = [
    { linkName: "Blog", linkUrl: "#" },
    { linkName: "Help Center", linkUrl: "#" },
    { linkName: "Support", linkUrl: "#" },
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
      <footer className=" bg-white text-gray-900 pt-16 mt-auto">
        {/* book a demo */}
        <AnimatedContent isVisible={isVisibleSection1}>
          <div
            ref={section1Ref}
            className=" bg-vignette p-8  mx-8 lg:mx-28  flex flex-col  text-gray-50 mb-16"
          >
            <div className=" mb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3 ">
              <h1 className=" font-semibold text-lg   lg:text-3xl">
                Power Your Financial Future
              </h1>
              <Link
                to={"/contact-us"}
                className=" w-fit inline-block border border-[#D0D5DD] bg-white text-[#344054] font-medium rounded-lg px-4 py-2 shadow-sm "
              >
                Book a Demo
              </Link>
            </div>
            <p className=" lg:text-xl">
              Ready to transform your institution? See how our core
              infrastructure can help you <br /> innovate, scale, and succeed in
              the modern financial landscape.
            </p>
          </div>
        </AnimatedContent>
        {/* footer content */}
        <div className=" pb-4  bg-[#FDFDFD] pt-8 px-3  md:px-16  text-sm text-[#475467] font-satoshi">
          <AnimatedContent isVisible={isVisibleSection2}>
            <div
              ref={section2Ref}
              className=" lg:flex lg:justify-between gap-x-4 lg:items-center"
            >
              {/* logo */}
              <div className=" lg:mb-auto">
                <img src={coreInfraBlack} alt="logo" />
                <p className=" text-xs">The Core of Financial Technology</p>
              </div>
              {/* nav link */}
              <div className=" lg:w-[70%] mt-8 md:mt-0  md:flex md:justify-between ">
                <div className=" flex flex-col w-fit gap-1 shrink-0">
                  <p className=" font-bold text-[#000000]">CoreInfra</p>
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
                {/* solution */}
                <div className=" mt-4 md:mt-0">
                  <div className=" flex flex-col w-fit gap-1 ">
                    <p className=" font-bold text-[#000000]">Solutions</p>
                    {solutionsData.map(({ linkName, linkUrl }) => (
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
                {/* resources */}
                <div className=" mt-4 md:mt-0">
                  <div className=" flex flex-col w-fit gap-1 ">
                    <p className=" font-bold text-[#000000]">Resources</p>
                    {resourcesData.map(({ linkName, linkUrl }) => (
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
                {/* legal */}
                <div className=" mt-4 md:mt-0">
                  <div className=" flex flex-col w-fit gap-1 ">
                    <p className=" font-bold text-[#000000]">Legal</p>
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
              </div>
            </div>
            {/* copyright */}
            <div className=" border-t border-gray-200 my-4"></div>
            <div className=" md:flex md:justify-between items-center">
              <p className=" text-[#667085] font-bold">
                © {currentYear} CoreInfra™. All rights reserved.{" "}
              </p>
              {/* social icons */}
              <div>
                <SocialIcon
                  url="https://x.com/CoreInfraHQ"
                  target="_blank"
                  bgColor="transparent"
                  fgColor="gray"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url="https://www.linkedin.com/company/coreinfrahq"
                  target="_blank"
                  bgColor="transparent"
                  fgColor="gray"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url="https://facebook.com/coreinfrahq.com"
                  target="_blank"
                  bgColor="transparent"
                  fgColor="gray"
                  style={{ height: 30, width: 30 }}
                />
                {/* <SocialIcon
                  url="https://instagram.com/coreinfrahq"
                  target="_blank"
                  bgColor="transparent"
                  fgColor="gray"
                /> */}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </footer>
    </>
  );
};
