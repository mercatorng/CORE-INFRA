import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/coreInfraLogoWhite.svg";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GlobalCTAButton } from "./button";
import { useGlobalContext } from "../utils/context";
import logoBlack from "../assets/coreInfraLogoBlack.svg";
import menuBtn from "../assets/menuBtn.svg";
import { RiMenuLine } from "react-icons/ri";
import { LetsTalkButton } from "./button";

export const Navbar = ({ homeUrl, activeLink, setActiveLink }) => {
  const { windowWidth } = useGlobalContext();
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
  function clickAboutLink() {
    setActiveLink("/about");
    closeMenuOnSmallScreen();
  }

  return (
    <nav
      className={` z-50 flex bg-inherit w-full justify-between items-center shadow-sm py-2  px-3 mb-16 md:px-16 lg:px-28 ${
        sticky ? "fixed top-0 left-0 z-50" : "relative"
      }`}
    >
      {/* logo */}
      <Link
        onClick={closeMenuOnSmallScreen}
        to={"/"}
        className={`w-[6rem] md:w-[160px] `}
      >
        <img
          src={homeUrl ? logo : logoBlack}
          alt="logo"
          className=" w-full h-full object-cover"
        />
      </Link>
      {/* menu button */}
      <button onClick={() => setMenu(!showMenu)} className=" md:hidden">
        <RiMenuLine size={20} className=" text-inherit" />
      </button>
      {/* nav links */}

      <div
        className={`absolute  md:relative  md:bg-transparent md:text-inherit md:flex-row  md:w-fit  shadow-md md:shadow-none  w-full text-black top-[100%] p-4 bg-white left-0 flex flex-col gap-6 z-50 globalTransition ${
          !showMenu && windowWidth < 768 ? "-translate-x-[100%]" : ""
        }  `}
      >
        <Link
          onClick={clickAboutLink}
          to={"/about"}
          className={` w-fit hover:text-ctaGreen  ${
            activeLink === "/about" ? " text-ctaGreen font-bold " : ""
          }`}
        >
          About
        </Link>
        <button
          onClick={() => setDropDown(!showDropDown)}
          className={`flex gap-x-1 items-center justify-between ${notificationButtonClassname} hover:text-ctaGreen`}
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
              setActiveLink,
              activeLink,
              closeMenuOnSmallScreen,
            }}
          />
        )}
      </div>
      {/* lets talk for small medium screen above */}
      <LetsTalkButton style={"hidden md:block"} />
    </nav>
  );
};

const SolutionLinks = ({
  setDropDown,
  notificationButtonClassname,
  setPageTitle,
  setActiveLink,
  activeLink,
  closeMenuOnSmallScreen,
}) => {
  const linkContainerRef = useRef(null);

  const data = [
    {
      id: 0,
      title: "Bespoke Payment Software",
      url: "/bespoke-payment-software",
      pageTitle: "Elevate your transactions with custom payment software",
    },
    {
      id: 1,
      title: "Infrastructure Solutions",
      url: "/infrastructure-solutions",
      pageTitle: " Robust infrastructure for secure financial operations",
    },
    {
      id: 2,
      title: "Corporate Disbursement Platform",
      url: "/corporate-disbursement-platform",
      pageTitle: "Optimize disbursements with our automated platform",
    },
    {
      id: 3,
      title: "Card and PIN Management Solutions",
      url: "/card-and-pin-management-solutions",
      pageTitle: "Innovative Solutions for Card Management",
    },
    {
      id: 4,
      title: "Customer Engagement",
      url: "/customer-engagement",
      pageTitle: "Unlocking Strategic Opportunities in Transaction Failures.",
    },
    {
      id: 5,
      title: "Scheme Reporting",
      url: "/scheme-reporting",
      pageTitle: "Simplify Compliance Reporting with Automation",
    },
    {
      id: 6,
      title: "Fintech in a Box",
      url: "/fintech-in-a-box",
      pageTitle: "Seamless collaboration with Fintechs",
    },
    {
      id: 7,
      title: "Fraud Monitoring",
      url: "/fraud-monitoring",
      pageTitle: "Smart Fraud Monitoring",
    },
    {
      id: 8,
      title: "Instant Card Issuance",
      url: "/instant-card-issuance",
      pageTitle: "Empowering More Faster, Efficient Card Services",
    },
    {
      id: 9,
      title: "Pin Delivery",
      url: "/pin-delivery",
      pageTitle: "PINGenie: A Card  PIN(Data) Management Solution",
    },
  ];

  function clickOutsideLinksContainer(e) {
    const clickedElement = e.target;

    // Check if the clicked element or its parent has the button class
    const isButtonClick =
      clickedElement.classList.contains(notificationButtonClassname) ||
      clickedElement.closest(`.${notificationButtonClassname}`);

    if (
      linkContainerRef.current &&
      !linkContainerRef.current.contains(e.target) &&
      !isButtonClick
    ) {
      setDropDown(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", clickOutsideLinksContainer);
    return () => {
      document.body.removeEventListener("click", clickOutsideLinksContainer);
    };
  }, []);

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
      className=" globalTransition md:border  flex flex-col pl-4 gap-2 md:absolute md:top-[100%] md:-left-[50%] md:bg-white md:w-[400px] md:text-black md:shadow-md md:rounded-md md:p-2 "
    >
      {data.map(({ id, title, url, pageTitle }) => {
        return (
          <Link
            onClick={() => {
              clickLink(url, pageTitle);
            }}
            key={id}
            to={url}
            className={` rounded-md pl-2 py-2 globalTransition font-bold ${
              activeLink === url
                ? "bg-black text-ctaGreen "
                : "bg-transparent hover:bg-[#DBFFEC]"
            }  `}
          >
            {title}
          </Link>
        );
      })}
      {/* lets talk */}
      <LetsTalkButton style={"md:hidden"} />
    </div>
  );
};
