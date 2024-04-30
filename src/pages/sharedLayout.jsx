import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";
import { CookieConsent } from "../components/cookieComponent";
import { useEffect } from "react";
import { useGlobalContext } from "../utils/context";

export const SharedLayout = () => {
  const location = useLocation();
  const homeUrl = location.pathname === "/";
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    // set active link to empty on only homepage
    if (homeUrl) {
      setActiveLink("");
    }
  }, [location.pathname]);

  return (
    <div
      className={` ${
        homeUrl ? "bg-[#050806] text-white" : "bg-white text-gray-950"
      } `}
    >
      <ScrollToTopOnPageChange />
      <Navbar {...{ homeUrl }} />
      <Outlet />
      <Footer />
      <CookieConsent />
    </div>
  );
};
