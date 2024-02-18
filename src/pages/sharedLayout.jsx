import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";
import { useEffect } from "react";

export const SharedLayout = () => {
  //  checks if url is home
  const location = useLocation();
  const homeUrl = location.pathname === "/";

  const pageTitle = sessionStorage.getItem("pageTitle");

  useEffect(() => {
    if (!homeUrl) {
      document.title = pageTitle;
    }
  }, []);

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
    </div>
  );
};
