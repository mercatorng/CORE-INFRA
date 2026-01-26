import { OpenAboutPageButton, RequestDemoButton } from "./button";
import coreInfraBlack from "../assets/coreInfraLogoBlack.svg";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useRef } from "react";
import AnimatedContent from "../components/animatedContent";

import logoBlack from "../assets/coreInfraLogoBlack.svg";
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
    { linkName: "Issuing Solutions", linkUrl: "https://cardinfra.com/" },
    {
      linkName: "Acquiring Solutions",
      linkUrl: "#",
    },
    {
      linkName: "Digital Banking Solutions",
      linkUrl: "#",
    },
    { linkName: "Bespoke Solutions", linkUrl: "#" },
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
  function closeMenuOnSmallScreen() {
    if (showMenu && windowWidth < 768) {
      setMenu(false);
    }
  }
  return (
    <>
      <footer className="pt-16 pl-4 mt-auto text-gray-900 bg-white ">
        {/* book a demo */}

        {/* footer content */}
        <div className=" pb-4   pt-8 px-3  md:px-16  text-sm text-[#475467] font-satoshi">
          <AnimatedContent isVisible={isVisibleSection2}>
            <div
              ref={section2Ref}
              className="flex flex-col justify-between sm:items-center sm:flex-row gap-x-4"
            >
              {/* logo */}
              <div className=" lg:mb-auto w-fit">
                <img src={coreInfraBlack} alt="logo" />
                <p className="mb-8 text-xs w-fit">
                  The Core of Financial Technology
                </p>
              </div>
              {/* nav link */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:justify-items-end md:w-[70%]">
                <div className="flex flex-col gap-4 mt-4 md:mt-0 w-[150px]">
                  <p className=" font-bold text-[#000000]">CoreInfra</p>
                  {navLinks.map(({ linkName, linkUrl }) => (
                    <Link
                      key={linkName}
                      className="gap-4 hover:text-ctaGreen globalTransition "
                      to={linkUrl}
                    >
                      {linkName}
                    </Link>
                  ))}
                </div>
                {/* solution */}
                <div className="mt-4 md:mt-0">
                  <div className="flex flex-col gap-4  w-[150px]">
                    <p className=" font-bold text-[#000000]">Solutions</p>
                    {solutionsData.map(({ linkName, linkUrl }, index) => (
                      <Link
                        key={linkName}
                        target={index == 0 ? "_blank" : "_self"}
                        className=" hover:text-ctaGreen globalTransition"
                        to={linkUrl}
                      >
                        {linkName}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* resources */}
                <div className="mt-4 md:mt-0">
                  <div className="flex flex-col gap-4 w-[150px]">
                    <p className=" font-bold text-[#000000]">Resources</p>
                    {resourcesData.map(({ linkName, linkUrl }) => (
                      <Link
                        key={linkName}
                        className=" hover:text-ctaGreen globalTransition"
                        to={linkUrl}
                      >
                        {linkName}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* legal */}
                <div className="mt-4 md:mt-0">
                  <div className="flex flex-col gap-4 w-[150px]">
                    <p className=" font-bold text-[#000000]">Legal</p>
                    {legalData.map(({ linkName, linkUrl }) => (
                      <Link
                        key={linkName}
                        className=" hover:text-ctaGreen globalTransition"
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
            <div className="my-4 border-t border-gray-200 "></div>
            <div className="items-center md:flex md:flex-row md:justify-between ">
              <p className="font-bold text-center text-gray-500 md:text-start">
                © {currentYear} CoreInfra™. All rights reserved.{" "}
              </p>
              {/* social icons */}
              <div className="place-self-center md:place-self-auto">
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
