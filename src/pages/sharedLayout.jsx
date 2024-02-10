import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useGlobalContext } from "../utils/context";

export const SharedLayout = () => {

  //  checks if url is home
  const location = useLocation();
  const homeUrl = location.pathname === "/";

  return (
    <div className={` ${homeUrl ? "bg-[#050806] text-white" : "bg-white text-gray-950"} `}>
      <Navbar {...{homeUrl}} />
      <Outlet />
      <Footer />
    </div>
  );
};
