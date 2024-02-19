import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";
import { useEffect, useState } from "react";

export const SharedLayout = () => {
  //  checks if url is home
  const location = useLocation();
  const homeUrl = location.pathname === "/";
  const path = location.pathname;

  const [activeLink, setActiveLink] = useState(location.pathname);
  // set persistent page title for solution pages on fresh
  const pageTitle = sessionStorage.getItem("pageTitle");
  useEffect(() => {
    // set active link to empty on only homepage
    if (homeUrl) {
      setActiveLink("");
    }

    // set page title to default for home and about page on refresh
    // else grab page title from session storage for persistent active page name
    if (path === "/" || path === "/about") {
      document.title =
        "CoreInfra - Modern payments infrastructure for Financial institutions";
    } else {
      document.title = pageTitle;
    }
  }, [path]);

  return (
    <div
      className={` ${
        homeUrl ? "bg-[#050806] text-white" : "bg-white text-gray-950"
      } `}
    >
      <ScrollToTopOnPageChange />
      <Navbar {...{ homeUrl, activeLink, setActiveLink }} />
      <Outlet />
      <Footer />
    </div>
  );
};
