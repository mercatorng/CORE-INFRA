import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/coreInfraLogoWhite.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GlobalCTAButton } from "./button";
import { useGlobalContext } from "../utils/context";
import logoBlack from "../assets/coreInfraLogoBlack.svg";
import menuBtn from "../assets/menuBtn.svg";
import { RiMenuLine } from "react-icons/ri";

export const Navbar = ({ homeUrl }) => {
  const { windowWidth } = useGlobalContext();
  const [showDropDown, setDropDown] = useState(false);
  const notificationButtonClassname = "notificationButton";
  const [showMenu, setMenu] = useState(false);

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

  return (
    <nav
      className={` z-50 flex bg-inherit w-full justify-between items-center shadow-sm pt-2 px-3 mb-16 md:px-16 lg:px-24 ${
        sticky ? "fixed top-0 left-0 z-50" : "relative"
      }`}
    >
      {/* logo */}
      <Link to={"/"} className=" w-[6rem] md:w-[160px]">
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
          !showMenu ? "-translate-x-[100%]" : ""
        }  `}
      >
        <Link className=" w-fit">About</Link>
        <button
          onClick={() => setDropDown(!showDropDown)}
          className={`flex gap-x-1 items-center justify-between ${notificationButtonClassname}`}
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
              setMenu,
              showMenu,
              windowWidth,
            }}
          />
        )}
      </div>
      {/* get in touch for small medium screen above */}
      <GlobalCTAButton
        style={" text-black bg-ctaGreen w-fit hidden md:block "}
        text={"Get in touch "}
      />
    </nav>
  );
};

const SolutionLinks = ({
  setDropDown,
  notificationButtonClassname,
  setMenu,
  showMenu,
  windowWidth,
}) => {
  const data = [
    {
      id: 0,
      title: "Bespoke Payment Software",
      url: "bespoke-payment-software",
    },
    {
      id: 1,
      title: "Infrastructure Solutions",
      url: "infrastructure-solutions",
    },
    {
      id: 2,
      title: "Corporate Disbursement Platform",
      url: "corporate-disbursement-platform",
    },
    {
      id: 3,
      title: "Card and PIN Management Solutions",
      url: "card-and-pin-management-solutions",
    },
    { id: 4, title: "EngageNotify360", url: "EngageNotify360" },
    { id: 5, title: "SchemeComply360", url: "SchemeComply360" },
    { id: 6, title: "Fintech in a Box", url: "Fintech in a Box" },
  ];

  const linkContainerRef = useRef(null);

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

  // set active page
  const { dispatch, activePage } = useGlobalContext();

  function changeActivePage(pageName) {
    dispatch({ type: "CHANGE_ACTIVE_PAGE", payload: pageName });
  }

  function clickLink(title) {
    changeActivePage(title);
    setDropDown(false);
    if (showMenu && windowWidth < 768) {
      setMenu(false);
    }
  }

  return (
    <div
      ref={linkContainerRef}
      className=" globalTransition md:border  flex flex-col pl-4 gap-2 md:absolute md:top-[100%] md:-left-[50%] md:bg-white md:w-[400px] md:text-black md:shadow-md md:rounded-md md:p-2 "
    >
      {data.map(({ id, title, url }) => {
        return (
          <Link
            onClick={() => {
              clickLink(title);
            }}
            key={id}
            to={`/${url}`}
            className={` rounded-md pl-2 py-2 globalTransition font-bold ${
              activePage === title
                ? "bg-black text-ctaGreen "
                : "bg-transparent hover:bg-[#DBFFEC]"
            }  `}
          >
            {title}
          </Link>
        );
      })}
      {/* get in touch */}
      <GlobalCTAButton
        style={" text-black bg-ctaGreen w-fit md:hidden "}
        text={"Get in touch "}
      />
    </div>
  );
};
