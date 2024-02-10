import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/coreInfraLogoWhite.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GlobalCTAButton } from "./button";
import { useGlobalContext } from "../utils/context";
import logoBlack from "../assets/coreInfraLogoBlack.svg";

export const Navbar = ({ homeUrl }) => {
  const [showDropDown, setDropDown] = useState(false);
  const notificationButtonClassname = "notificationButton";

  return (
    <nav className="  border-white flex justify-between items-center pt-2 px-3 mb-16 md:px-16 lg:px-24">
      {/* logo */}
      <Link to={"/"} className=" w-[6rem] md:w-[160px]">
        <img
          src={homeUrl ? logo : logoBlack}
          alt="logo"
          className=" w-full h-full object-cover"
        />
      </Link>
      {/* nav links */}
      <div className=" flex gap-x-2 relative text-sm md:text-base  md:w-[20%] md:justify-between">
        <Link>About</Link>
        <button
          onClick={() => setDropDown(true)}
          className={`flex gap-x-1 items-center ${notificationButtonClassname}`}
        >
          {" "}
          <span>Solutions</span> <IoIosArrowDown size={16} className=" mt-1" />{" "}
        </button>
        {showDropDown && (
          <SolutionLinks {...{ setDropDown, notificationButtonClassname }} />
        )}
      </div>
      {/* get in touch */}
      <GlobalCTAButton
        style={
          " text-black bg-green-500 bg-ctaGreen text-sm md:text-base hover:text-white "
        }
        text={"Get in touch "}
      />
    </nav>
  );
};

const SolutionLinks = ({ setDropDown, notificationButtonClassname }) => {
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
    sessionStorage.setItem("activePage", pageName);
    dispatch({ type: "CHANGE_ACTIVE_PAGE", payload: pageName });
  }

  return (
    <div
      ref={linkContainerRef}
      className=" globalTransition absolute bg-white z-50 text-black rounded-md shadow-md top-7 -left-[70%]  grid grid-cols-2 gap-4 p-2 w-[320px] md:w-[400px] border text-sm justify-between"
    >
      {data.map(({ id, title, url }) => {
        return (
          <Link
            onClick={() => {
              changeActivePage(title);
              setDropDown(false);
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
    </div>
  );
};
