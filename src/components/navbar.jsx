import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/coreInfraLogoWhite.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useGlobalContext } from "../utils/context";
import logoBlack from "../assets/coreInfraLogoBlack.svg";
import { RiMenuLine } from "react-icons/ri";
import { GetInTouchBTN } from "./button";
import { useHideOnclickOutsideContainer } from "../hooks/useHideOnclickOutsideContainer";

export const Navbar = ({ homeUrl }) => {
  const { windowWidth, activeLink, setActiveLink, checkContactUsPath, path } =
    useGlobalContext();
  const [showDropDown, setDropDown] = useState(false);
  const notificationButtonClassname = "notificationButton";
  const [showMenu, setMenu] = useState(false);

  // make nav bar sticky
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // change page title
  const [activePageTitle, setPageTitle] = useState("");
  useEffect(() => {
    document.title = activePageTitle;
  }, [activePageTitle]);

  function closeMenuOnSmallScreen() {
    if (showMenu && windowWidth < 768) {
      setMenu(false);
    }
  }

  // onclick about link
  function clickNavigationLink(linkUrl) {
    setActiveLink(`/${linkUrl}`);
    closeMenuOnSmallScreen();
  }

  //hide menu container on click outside
  const menuContainerRef = useRef(null);
  const menuButtonClassname = "menuBtn";
  useHideOnclickOutsideContainer(
    menuContainerRef,
    menuButtonClassname,
    setMenu
  );

  //check non sublink pages
  const checkNonSublinkPath =
    path === "/about" || path === "/contact-us" || path === "/";

  return (
    <nav
      className={`  z-50 relative flex bg-inherit w-full justify-between items-center  py-2  px-3 mb-16 md:px-16  `}
    >
      {/* logo */}
      <Link
        onClick={closeMenuOnSmallScreen}
        to={"/"}
        className={`w-[6rem] md:w-[160px] `}
      >
        <img
          src={logoBlack}
          alt="logo"
          className=" w-full h-full object-cover"
        />
      </Link>

      {/* menu button */}
      <button
        onClick={() => {
          setMenu(!showMenu);
        }}
        className={`md:hidden ${menuButtonClassname} `}
      >
        <RiMenuLine size={20} className=" text-inherit" />
      </button>

      {/* nav links */}
      <div
        ref={menuContainerRef}
        className={`absolute md:relative  md:bg-transparent md:text-inherit md:flex-row  md:w-fit shadow-md md:shadow-none  w-full text-black top-[100%] p-4 bg-white left-0 flex flex-col gap-6 z-50  ${
          !showMenu && windowWidth < 768 ? "-translate-x-[100%]" : ""
        }  `}
      >
        {/* about */}
        <Link
          onClick={() => clickNavigationLink("about")}
          to={"/about"}
          className={` w-fit hover:text-ctaGreen globalTransition  ${
            activeLink === "/about" ? " text-ctaGreen font-bold " : ""
          }`}
        >
          About
        </Link>
        {/* solutions */}
        <button
          onClick={() => setDropDown(!showDropDown)}
          className={`flex gap-x-1 items-center justify-between ${notificationButtonClassname} ${
            !checkNonSublinkPath && "text-ctaGreen"
          } hover:text-ctaGreen globalTransition`}
        >
          {" "}
          <span>Solutions</span>{" "}
          <IoIosArrowDown
            size={16}
            className={`mt-1   ${showDropDown ? "-rotate-0" : "-rotate-90"}`}
          />{" "}
        </button>
        {showDropDown && (
          <SolutionLinks
            {...{
              setDropDown,
              notificationButtonClassname,
              setPageTitle,
              closeMenuOnSmallScreen,
            }}
          />
        )}
      </div>

      {/* lets talk for  medium screen above */}
      <GetInTouchBTN style={"hidden md:block"} />
    </nav>
  );
};

const SolutionLinks = ({
  setDropDown,
  notificationButtonClassname,
  setPageTitle,
  closeMenuOnSmallScreen,
}) => {
  // hide solution container on click outside
  const linkContainerRef = useRef(null);
  useHideOnclickOutsideContainer(
    linkContainerRef,
    notificationButtonClassname,
    setDropDown
  );

  const data = [
    {
      id: 6,
      title: " Issuing as a Service Platform",
      url: "/issuing-as-a-service-platform",
      pageTitle: "Seamless collaboration with Fintechs",
    },
    {
      id: 10,
      title: "Prepaid Card Management System",
      url: "/prepaid-card-management-system",
      pageTitle: "Innovative Prepaid Card Solutions for Banks",
    },
    {
      id: 8,
      title: "Instant Card Solution",
      url: "/instant-card-solution",
      pageTitle: "Empowering More Faster, Efficient Card Services",
    },
    {
      id: 4,
      title: "Payment Experience Platform",
      url: "/payment-experience-platform",
      pageTitle:
        "Transforming Transaction Failures into Strategic Opportunities.",
    },
    {
      id: 3,
      title: "Card and PIN Solution",
      url: "/card-and-pin-solution",
      pageTitle:
        "Elevate Your Card Services with Our Comprehensive Card and PIN Solution",
    },
    {
      id: 5,
      title: "Scheme Reporting and Compliance",
      url: "/scheme-reporting-and-compliance",
      pageTitle: "Simplify Compliance Reporting with Automation",
    },
    {
      id: 11,
      title: "POS Monitoring Solution",
      url: "/pos-monitoring-solution",
      pageTitle: "Gain Unparalleled Visibility and Control",
    },
    {
      id: 1,
      title: "Digital Banking Solutions",
      url: "/digital-banking-solutions",
      pageTitle:
        " Unleash the Power of Digital Banking with Our Comprehensive Infrastructure",
    },
  ];

  const { activeLink, setActiveLink, checkContactUsPath } = useGlobalContext();

  // on link click
  function clickLink(path, pageTitle) {
    setDropDown(false);
    setActiveLink(path);
    setPageTitle(pageTitle);
    sessionStorage.setItem("pageTitle", pageTitle);
    closeMenuOnSmallScreen();
  }

  return (
    <div
      ref={linkContainerRef}
      className=" md:border  flex flex-col pl-4 gap-2 md:absolute md:top-[100%] md:-left-[50%] md:bg-white md:w-[400px] md:text-black md:shadow-md md:rounded-md md:p-2 "
    >
      {data.map(({ id, title, url, pageTitle }) => {
        return (
          <Link
            onClick={() => {
              clickLink(url, pageTitle);
            }}
            key={id}
            to={url}
            className={` rounded-md pl-2 py-2 font-bold globalTransition ${
              activeLink === url
                ? "bg-black text-ctaGreen "
                : "bg-transparent hover:bg-[#DBFFEC] "
            }  `}
          >
            {title}
          </Link>
        );
      })}
      {/* lets talk */}
      {!checkContactUsPath ? <GetInTouchBTN style={"md:hidden"} /> : <p></p>}
    </div>
  );
};
